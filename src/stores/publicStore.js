import { defineStore } from 'pinia'
import axios from 'axios'

const base_url = import.meta.env.VITE_URI

const publicUseStore = defineStore('public', {
  state: () => {
    return {
      lang: localStorage.getItem('lang') || 'en',
    }
  },
  actions: {
    getPhrases(num, lang) {
      return axios.get(`${base_url}/phrases/${num}/${lang}`).then((response) => {
        return response.data
      })
    },
    newPhrase(phrase) {
      return axios.post(`${base_url}/newphrase`, phrase).then((response) => {
        return response.data
      })
    }
  }
})

export default publicUseStore
