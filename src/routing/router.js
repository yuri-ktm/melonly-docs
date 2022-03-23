import { createRouter, createWebHistory } from 'vue-router'
import { DEFAULT_VERSION } from '../util/constants'
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
      path: '/docs',
      redirect: `/docs/${DEFAULT_VERSION}/installation`,
    },
    {
      path: '/docs/:version/:section',
      component: Docs,
    },
  ],
})
