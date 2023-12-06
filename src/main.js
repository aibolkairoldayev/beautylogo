import './assets/styles/main.sass'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import i18n from './i18n';
// import { createI18n } from 'vue-i18n';

// Vue.config.productionTip = false;

// const i18n = createI18n({
//     // your i18n setup here
// });

const app = createApp(App)

app.use(createPinia())
app.use(i18n);

app.mount('#app')
