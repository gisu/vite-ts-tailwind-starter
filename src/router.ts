import index from '@/pages/index.vue'
import { createRouter, createWebHistory } from 'vue-router'

console.log('index', index)

const routes = [
  {
    path: '/',
    component: index
  }
  // {
  //   path: '/:path(.*)',
  //   component: index
  // }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
