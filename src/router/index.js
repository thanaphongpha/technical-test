import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'Topic1',
    component: () => import('../views/Topic1.vue')
  },
  {
    path: '/topic2',
    name: 'Topic2',
    component: () => import('../views/Topic2.vue')
  },
  {
    path: '/topic3',
    name: 'Topic3',
    component: () => import('../views/Topic3.vue')
  },
  {
    path: '/topic4',
    name: 'Topic4',
    component: () => import( '../views/Topic4')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
