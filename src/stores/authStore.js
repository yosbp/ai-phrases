import { defineStore } from 'pinia'
import router from '../router'
import axios from 'axios'
import setAuthHeader from '../utils/axios'

const base_url = import.meta.env.VITE_URI

const authUseStore = defineStore('auth', {
  state: () => {
    return {
      token: localStorage.getItem('token') ? localStorage.getItem('token') : null
    }
  },

  actions: {
    login(data) {
        return axios.post(base_url + '/login', data)
        .then((response) => {
          this.token = response.data.token
          localStorage.setItem('token', response.data.token)
          setAuthHeader(response.data.token)
          return response.data
        })
        .catch((error) => {
          return Promise.reject(error.response.data)
        })
    },

    logout() {
        this.token = null
        localStorage.removeItem('token')
        setAuthHeader()
        router.push({ name: "Login" })
    }
  }
})

export default authUseStore
