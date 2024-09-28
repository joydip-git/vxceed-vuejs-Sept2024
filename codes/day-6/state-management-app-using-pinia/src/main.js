import './assets/main.css'
import { createApp } from 'vue'

import { createPinia } from "pinia";
import App from './App.vue'

const piniaMiddleware = createPinia()

const vueApp = createApp(App)
vueApp.use(piniaMiddleware)
vueApp.mount('#app')
