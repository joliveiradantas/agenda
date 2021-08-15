import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeIndex from '@/views/Home/Index.vue'

import ContactsList from '@/views/Contacts/List.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeIndex
  },
  {
    path: '/contatos',
    name: 'contacts-list',
    component: ContactsList,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
