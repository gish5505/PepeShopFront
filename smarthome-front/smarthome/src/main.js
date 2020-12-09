import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
//import './plugins/bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import axios from 'axios'
import VueThermometer from 'vuejs-thermometer'

Vue.use(VueThermometer);
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

Vue.prototype.$http = axios.create({
  baseURL: "http://localhost:5000/api/"
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
