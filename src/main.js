// import Vue from 'vue'
import { createApp } from 'vue'
import App from './App.vue'
import naive from 'naive-ui'
import axios from 'axios'
import VueAxios from 'vue-axios'

const app=createApp(App);
app.use(naive);
app.use(VueAxios, axios);
app.mount('#app');
