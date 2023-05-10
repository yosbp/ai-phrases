import { defineStore } from 'pinia'
import axios from 'axios'

const base_url = 'http://127.0.0.1:8000/api'

const phraseUseStore = defineStore('phrases', {
  state: () => {
    return {
      phrases: []
    }
  },
  actions: {
    newPhrase(data) {
      return axios
        .post(`${base_url}/new`, data)
        .then((response) => {
          return response.data
        })
        .catch((error) => {
          return Promise.reject(error.response.data)
        })
    },
    getPhrases() {
      return axios.get(`${base_url}/phrases`).then((response) => {
        return response.data
      })
    },

    getPhrasebyId(id) {
      return axios.get(`${base_url}/phrase/${id}`).then((response) => {
        return response.data
      })
    },

    updatePhrase(id, data) {
      return axios.put(`${base_url}/phrase/${id}`, data).then((response) => {
        return response.data
      })
    },

    deletePhrase(id) {
      return axios.delete(`${base_url}/phrase/${id}`).then((response) => {
        return response.data
      })
    }
  }
})

export default phraseUseStore
