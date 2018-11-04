import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Meta from 'vue-meta';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Vuetify from 'vuetify';

Vue.use(Vuetify);
Vue.use(VueAxios, axios);
Vue.use(Meta);

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render(h) { return h(App); },
}).$mount('#app');
