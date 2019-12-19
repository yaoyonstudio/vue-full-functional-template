import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Profile from '../views/Profile.vue'

import { getValue } from '../libs/Utils'

Vue.use(VueRouter)

const routes = [{
    path: '/home',
    name: 'home',
    alias: '/',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.VUE_APP_PREFIX,
  routes,
})

router.beforeEach((to, from, next) => {
  // private routes
  const privateRoutes = ['profile']
  if (!privateRoutes.includes(to.name)) {
    next()
  } else {
    const token = getValue('token')
    if (token) {
      next()
    } else {
      // redirect to '/'
      next('/')
    }
  }
})

export default router
