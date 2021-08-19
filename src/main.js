import Vue from 'vue'
import App from './App.vue'

import router from './router';

import '@/config/fields';
import filters from '@/helpers/filters/_install';
import store from './store'

Vue.use(filters);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
