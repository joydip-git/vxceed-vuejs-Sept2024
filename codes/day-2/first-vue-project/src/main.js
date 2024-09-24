import './assets/main.css'

import { createApp } from 'vue'
import App from "./App.vue";
import HelloWorld from './components/HelloWorld.vue';

const app = createApp(App)
app.component('app-hello-world', HelloWorld)
app.mount('#app')
