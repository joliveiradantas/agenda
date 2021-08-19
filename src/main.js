import Vue from 'vue'
import App from './App.vue'

import router from './router';
import store from './store'

import VMask from 'v-mask';

import '@/config/fields';

import filters from '@/helpers/filters/_install';

Vue.use(filters);
Vue.use(VMask);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
