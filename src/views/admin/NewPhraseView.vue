<template>
    <h1 class="text-black text-3xl font-bold text-center mb-8">New Phrase</h1>

    <a-form  class="" :model="formState" v-bind="layout" :validate-messages="validateMessages" @finish="newPhrase">
        <a-form-item :name="['phrase', 'phrase']" label="Phrase" :rules="[{ required: true }]">
            <a-input v-model:value="formState.phrase.phrase" />
        </a-form-item>
        <a-form-item :name="['phrase', 'author']" label="Author">
            <a-input v-model:value="formState.phrase.author" />
        </a-form-item>
        <a-form-item :name="['phrase', 'source']" label="From" :rules="[{ required: true }]">
            <a-select v-model:value="formState.phrase.source" placeholder="Please select where the phrase comes from">
                <a-select-option value="book">Book</a-select-option>
                <a-select-option value="movie">Movie</a-select-option>
                <a-select-option value="serie">Serie</a-select-option>
                <a-select-option value="original">Original</a-select-option>
            </a-select>
        </a-form-item>
        <a-form-item :name="['phrase', 'category']" label="Category" :rules="[{ required: true }]">
            <a-select v-model:value="formState.phrase.category" placeholder="Please select category">
                <a-select-option value="sad">Sad</a-select-option>
                <a-select-option value="motivational">Motivational </a-select-option>
                <a-select-option value="funny">Funny</a-select-option>
                <a-select-option value="love">Love</a-select-option>
                <a-select-option value="happy">Happy</a-select-option>
            </a-select>
        </a-form-item>
        <a-form-item :name="['phrase', 'status']" label="Status" :rules="[{ required: true }]">
            <a-select v-model:value="formState.phrase.status" placeholder="Please select status">
                <a-select-option value="active">Active</a-select-option>
                <a-select-option value="pending">Pending </a-select-option>
            </a-select>
        </a-form-item>
        <a-form-item :name="['phrase', 'language']" label="Language" :rules="[{ required: true }]">
            <a-select v-model:value="formState.phrase.language" placeholder="Please select language">
                <a-select-option value="en">English</a-select-option>
                <a-select-option value="es">Spanish </a-select-option>
            </a-select>
        </a-form-item>
        <a-form-item :wrapper-col="{ ...layout.wrapperCol, offset: 6 }">
            <a-button type="primary" html-type="submit">Submit</a-button>
        </a-form-item>
    </a-form>
</template>
<script setup>

import { ref } from 'vue';
import phraseUseStore from '../../stores/phraseStore';
import { notification } from 'ant-design-vue';

const store = phraseUseStore();

const layout = {
    labelCol: {
        sm: { span: 6 },
        lg: { span: 2 },
    },
    wrapperCol: {
        lg: { span: 10 },
        sm: { span: 14 }
    },
};
const validateMessages = {
    required: '${label} is required!',
};
const formState = ref({
    phrase: {
        phrase: '',
        source: undefined,
        author: '',
        category: undefined,
        status: undefined,
        language: undefined
    },
});

const newPhrase = async () => {
    try {
        const response = await store.newPhrase(formState.value.phrase)
        if (response.status === true) {
            notification.open({
                message: 'Successfull save new Phrase',
                description: 'Thanks for your contribution',
            });
            formState.value.phrase = {
                phrase: '',
                source: undefined,
                author: '',
                category: undefined,
                status: undefined,
                language: undefined
            };
        }

    } catch (error) {
        console.log(error);
    }
}



</script>
