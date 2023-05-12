<template>
    <div>
        <a-modal :visible="props.visible" title="Send your Phrase" @cancel="handleCancel">
            <template #footer>
                <a-button key="back" @click="handleCancel">Return</a-button>
                <a-button key="submit" html-type="submit" type="primary" :loading="loading"
                    @click="handleOk">Submit</a-button>
            </template>
            <a-form ref="modalForm" :model="phrase" v-bind="layout" :validate-messages="validateMessages">
                <a-form-item :name="['phrase']" label="Phrase" :rules="[{ required: true }]">
                    <a-input v-model:value="phrase.phrase" />
                </a-form-item>
                <a-form-item :name="['author']" label="Author" :rules="[{ required: true }]">
                    <a-input v-model:value="phrase.author" />
                </a-form-item>
                <a-form-item :name="['source']" label="From" :rules="[{ required: true }]">
                    <a-select v-model:value="phrase.source" placeholder="Please select where the phrase comes from">
                        <a-select-option value="book">Book</a-select-option>
                        <a-select-option value="movie">Movie</a-select-option>
                        <a-select-option value="serie">Serie</a-select-option>
                        <a-select-option value="original">Original</a-select-option>
                    </a-select>
                </a-form-item>
                <a-form-item :name="['category']" label="Category" :rules="[{ required: true }]">
                    <a-select v-model:value="phrase.category" placeholder="Please select category">
                        <a-select-option value="sad">Sad</a-select-option>
                        <a-select-option value="motivational">Motivational </a-select-option>
                        <a-select-option value="funny">Funny</a-select-option>
                        <a-select-option value="love">Love</a-select-option>
                        <a-select-option value="happy">Happy</a-select-option>
                    </a-select>
                </a-form-item>
                <a-form-item :name="['language']" label="Language" :rules="[{ required: true }]">
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
import { notification } from 'ant-design-vue';
import publicUseStore from '../stores/publicStore';

const store = publicUseStore();

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


// Manage Form

const layout = {
    labelCol: {
        sm: { span: 6 },
    },
    wrapperCol: {
        sm: { span: 14 }
    },
};

const validateMessages = {
    required: '${label} is required!',
};

//Manage New Phrase

const phrase = ref({
    status: 'pending',
},);

const newPhrase = async () => {
    try {
        const response = await store.newPhrase(phrase.value)
        if (response.status === true) {
            notification.open({
                message: 'Successfull save new Phrase',
                description: 'Thanks for your contribution',
            });
        }
    } catch (error) {
        notification.open({
            message: 'Error in Create, try again',
            description: error.response.data.message,
        });
    }
}

const modalForm = ref();

const handleOk = () => {
    modalForm.value.validateFields().then(() => {
        newPhrase(phrase);
        loading.value = true;
        setTimeout(() => {
            loading.value = false;
            emit('hideModal')
        }, 2000);
    });

};


</script>
