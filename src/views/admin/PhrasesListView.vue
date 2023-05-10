<template>
    <h1 class="text-black text-3xl font-bold text-center mb-8">List</h1>

    <TablePhrases :data="data" @update-phrases="getPhrases"/>
    
</template>
<script setup>
import TablePhrases from '../../components/TablePhrases.vue';
import phraseUseStore from '../../stores/phraseStore';
import { ref } from 'vue';
import { onMounted } from 'vue';

const store = phraseUseStore();

const data = ref([]);

function getPhrases() {
    store.getPhrases().then((res) => {
        data.value = res.data;
    })
}

onMounted(() => {
    getPhrases();
})




</script>