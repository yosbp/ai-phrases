<template>
    <a-table :columns="column" :data-source="data">
        <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'status'">
                <span>
                    <a-tag :color="record.status === 'active' ? 'volcano' : 'green'">
                        {{ record.status.toUpperCase() }}
                    </a-tag>
                </span>
            </template>
            <template v-else-if="column.key === 'action'">
                <span>
                    <a-button type="primary" @click="showModal(record.id)">Update</a-button>
                </span>
            </template>
        </template>
    </a-table>
    <ModalUpdatePhrase v-if="visible" :id="selectedRecordId" :visible="visible" @hideModal="hideModal" />
</template>
<script setup>
import ModalUpdatePhrase from './ModalUpdatePhrase.vue';
import { ref } from 'vue';

defineProps({
    data: {
        type: Object,
    }
})

const emit = defineEmits(['updatePhrases'])

// Column Table Config

const column = [{
    title: 'Phrase',
    dataIndex: 'phrase',
    key: 'phrase',
    width: '500px',
}, {
    title: 'Source',
    dataIndex: 'source',
    key: 'source',
}, {
    title: 'Author',
    dataIndex: 'author',
    key: 'author',
}, {
    title: 'Category',
    dataIndex: 'category',
    key: 'category',
}, {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    filters: [
        { text: 'Pending', value: 'pending' },
        { text: 'Active', value: 'active' },
    ],
    onFilter: (value, record) => record.status.indexOf(value) === 0,
    sorter: (a, b) => a.status.length - b.status.length,
}, {
    title: 'Language',
    dataIndex: 'language',
    key: 'language',
    sorter: (a, b) => a.language.localeCompare(b.language)
}, {
    title: 'Action',
    key: 'action',
}]

// Manage Modal

const visible = ref(false)
const selectedRecordId = ref(null)

const showModal = (id) => {
    selectedRecordId.value = id
    visible.value = true
}

const hideModal = () => {
    visible.value = false
    emit('updatePhrases')
    selectedRecordId.value = null
}

</script>

<style>
.ant-table {
    min-width: 1000px;
}
</style>