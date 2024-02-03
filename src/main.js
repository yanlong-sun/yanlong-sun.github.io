import { createApp } from 'vue'
import i18n from './i18n'
import router from './router'
import './style.css'

import App from './App.vue'

createApp(App).use(i18n).use(router).mount('#app')
