import axios from 'axios'

const token = localStorage.getItem('token')

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_URI,
  headers: {'Authorization': 'Bearer ' + token}
})
export default axiosClient
