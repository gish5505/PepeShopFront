import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/css/main.css'
import axios from 'axios';
//import store from './components/Store/GlobalStore.js'

//import { data } from 'jquery'

Vue.config.productionTip = false

Vue.prototype.$http = axios.create({
  baseURL: "http://localhost:5000/"
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

