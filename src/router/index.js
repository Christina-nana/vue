import { createRouter, createWebHashHistory } from 'vue-router'
import gateway from '../views/gateway/index.vue'
const routes = [
  {
    path: '/',
    redirect: '/gateway'
  },
  {
    path: '/gateway',
    name: 'Gateway',
    component: gateway
  },
  {
    path: '/dynamicInfor',
    name: 'DynamicInfor',
    component: () => import('../views/dynamicInfor/index.vue')
  },
  {
    path: '/mineActivity',
    name: 'MineActivity',
    component: () => import('../views/mineActivity/index.vue')
  },
  {
    path: '/investGuide',
    name: 'InvestGuide',
    component: () => import('../views/investGuide/index.vue')
  },
  {
    path: '/oneMap',
    name: 'OneMap',
    component: () => import('../views/oneMap/index.vue')
  },
  {
    path: '/geoData',
    name: 'GeoData',
    component: () => import('../views/geoData/index.vue')
  },
  {
    path: '/academicExchange',
    name: 'AcademicExchange',
    component: () => import('../views/academicExchange/index.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/about/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
