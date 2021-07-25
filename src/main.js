import { createApp } from 'vue'
import App from './App.vue'
import VueKinesis from "vue-kinesis";
import './assets/css/tailwind.css'

createApp(App).use(VueKinesis).mount('#app')
