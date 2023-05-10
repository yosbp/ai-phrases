<template>
    <div>
        <a-modal :visible="props.visible" title="Update Phrase" @cancel="handleCancel">
            <template #footer>
                <a-tooltip title="Delete">
                    <a-button shape="circle" type="danger" size="medium" @click="handleDelete">
                        <template #icon>
                            <delete-outlined />
                        </template>
                    </a-button>
                </a-tooltip>
                <a-button key="back" @click="handleCancel">Return</a-button>
                <a-button key="submit" type="primary" :loading="loading" @click="handleOk">Submit</a-button>
            </template>
            <a-form class="" :model="phrase" v-bind="layout">
                <a-form-item :name="['phrase']" label="Phrase">
                    <a-input v-model:value="phrase.phrase" />
                </a-form-item>
                <a-form-item :name="['author']" label="Author">
                    <a-input v-model:value="phrase.author" />
                </a-form-item>
                <a-form-item :name="['source']" label="From">
                    <a-select v-model:value="phrase.source" placeholder="Please select where the phrase comes from">
                        <a-select-option value="book">Book</a-select-option>
                        <a-select-option value="movie">Movie</a-select-option>
                        <a-select-option value="serie">Serie</a-select-option>
                        <a-select-option value="original">Original</a-select-option>
                    </a-select>
                </a-form-item>
                <a-form-item :name="['category']" label="Category">
                    <a-select v-model:value="phrase.category" placeholder="Please select category">
                        <a-select-option value="sad">Sad</a-select-option>
                        <a-select-option value="motivational">Motivational </a-select-option>
                        <a-select-option value="funny">Funny</a-select-option>
                        <a-select-option value="love">Love</a-select-option>
                        <a-select-option value="happy">Happy</a-select-option>
                    </a-select>
                </a-form-item>
                <a-form-item :name="['status']" label="Status">
                    <a-select v-model:value="phrase.status" placeholder="Please select status">
                        <a-select-option value="active">Active</a-select-option>
                        <a-select-option value="pending">Pending </a-select-option>
                    </a-select>
                </a-form-item>
                <a-form-item :name="['language']" label="Language">
                    <a-select v-model:value="phrase.language" placeholder="Please select language">
                        <a-select-option value="en">English</a-select-option>
                        <a-select-option value="es">Spanish </a-select-option>
                    </a-select>
                </a-form-item>
            </a-form>
        </a-modal>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import phraseUseStore from '../stores/phraseStore';
import { notification } from 'ant-design-vue';
import { DeleteOutlined } from '@ant-design/icons-vue';

const store = phraseUseStore();

//Props and Emits

const props = defineProps({
    visible: {
        type: Boolean,
    },
    id: {
        type: Number,
    }
})

const emit = defineEmits(['hideModal'])

//Manage Modal and Send phrase to update

const loading = ref(false);

const handleCancel = () => {
    emit('hideModal')
};

//Manage Delete Phrase

const deletePhrase = async () => {
    try {
        const response = await store.deletePhrase(props.id, phrase.value)
        if (response.status === true) {
            notification.open({
                message: 'Successfull delete Phrase',
                description: 'Thanks for your contribution',
            });
        }
    } catch (error) {
        notification.open({
            message: 'Error in Delete, try again',
            description: error.response.data.message,
        });
    }
}

const handleDelete = () => {
    deletePhrase();
    loading.value = true;
    setTimeout(() => {
        loading.value = false;
        emit('hideModal')
    }, 2000);
};

//Manage Update Phrase
const updatePhrase = async () => {
    try {
        const response = await store.updatePhrase(props.id, phrase.value)
        if (response.status === true) {
            notification.open({
                message: 'Successfull save new Phrase',
                description: 'Thanks for your contribution',
            });
        }
    } catch (error) {
        notification.open({
            message: 'Error in Update, try again',
            description: error.response.data.message,
        });
    }
}

const handleOk = () => {
    updatePhrase();
    loading.value = true;
    setTimeout(() => {
        loading.value = false;
        emit('hideModal')
    }, 2000);
};

// Manage Form

const layout = {
    labelCol: {
        sm: { span: 6 },
    },
    wrapperCol: {
        sm: { span: 14 }
    },
};

// Get and Update Phrase Data

const phrase = ref({});

store.getPhrasebyId(props.id).then((res) => {
    phrase.value = res.data;
})

</script>