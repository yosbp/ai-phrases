import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Antd from 'ant-design-vue'
import './assets/index.css'
import 'ant-design-vue/dist/antd.css'

import App from './App.vue'
import router from './router'
import setAuthHeader from './utils/axios'

if (localStorage.token) {
  setAuthHeader(localStorage.token)
} else {
  setAuthHeader(false)
}

const app = createApp(App)

app.use(Antd)
app.use(createPinia())
app.use(router)

app.mount('#app')
