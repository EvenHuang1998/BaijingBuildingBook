import VueAxios from 'vue-axios'
import { createApp } from 'vue'
import axios from 'axios'
import naive from 'naive-ui'

import App from './App.vue'
import router from './routes'

const app=createApp(App);
app.use(naive);
app.use(VueAxios, axios);
app.use(router);
app.mount('#app');
