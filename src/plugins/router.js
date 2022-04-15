import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMeta from 'vue-meta'

Vue.use(VueRouter)
Vue.use(VueMeta)

const routes = [
  {
    path: '/',
    name: 'Home-view',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/S.P.E.C.I.A.L',
    name: 'Special-view',
    component: () => import('../views/Special-view.vue')
  },
  {
    path: '/General',
    name: 'General-view',
    component: () => import('../views/General-view.vue')
  },
  {
    path: '/Perks',
    name: 'Perks-view',
    component: () => import('../views/Perks-view.vue')
  },
  {
    path: '/Items',
    name: 'Items-view',
    component: () => import ('../views/Items-view.vue')
  },
  {
    path: '/*',
    name: '404-view',
    component: () => import ('../views/404-view.vue')
  },

  
]

const router = new VueRouter({
    mode: 'history',
    linkExactActiveClass: "active",
    base: process.env.BASE_URL,
    routes
  })
  
  export default router
  