import { defineStore } from 'pinia'
import axiosClient from '../axios'

const phraseUseStore = defineStore('phrases', {
  state: () => {
    return {
      phrases: []
    }
  },
  actions: {
    newPhrase(data) {
      return axiosClient
        .post('/new', data)
        .then((response) => {
          return response.data
        })
        .catch((error) => {
          return Promise.reject(error.response.data)
        })
    }
  }
})

export default phraseUseStore
