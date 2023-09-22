import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/completed',
      name: 'completed',
      component: () => import('../views/Completed.vue')
    },
    {
    path: '/start',
    name: 'start',
    component: () => import('../views/Projects.vue')
    },
    {
    path: '/extension',
    name: 'extension',
    component: () => import('../views/Extension.vue')
    },
    {
    path: '/resubmit',
    name: 'resubmit',
    component: () => import('../views/Resubmit.vue')
    }
  ]
})

export default router
