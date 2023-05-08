import { defineStore } from 'pinia'
import axiosClient from '../axios'
import router from '../router'

const authUseStore = defineStore('auth', {
  state: () => {
    return {
      token: localStorage.getItem('token') ? localStorage.getItem('token') : null
    }
  },

  actions: {
    login(data) {
      return axiosClient
        .post('/login', data)
        .then((response) => {
          this.token = response.data.token
          localStorage.setItem('token', response.data.token)
          return response.data
        })
        .catch((error) => {
          return Promise.reject(error.response.data)
        })
    },

    logout() {
        this.token = null
        localStorage.removeItem('token')
        router.push({ name: "Login" })
    }
  }
})

export default authUseStore
