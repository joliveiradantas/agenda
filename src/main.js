import Vue from 'vue'
import App from './App.vue'

import router from './router';

import '@/config/fields';
import filters from '@/helpers/filters/_install';

Vue.use(filters);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
