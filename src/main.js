import './assets/styles/main.sass'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import i18n from './i18n'

const app = createApp(App)

const pinia = createPinia()
app.use(pinia);
app.use(i18n);

app.mount('#app')
