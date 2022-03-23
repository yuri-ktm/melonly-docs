import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Docs from '../pages/Docs.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/docs/:version/:section',
      component: Docs,
    },
  ],
})
