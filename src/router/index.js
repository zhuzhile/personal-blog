import Vue from 'vue'
import VueRouter from 'vue-router'
import {appRouters, otherRouters} from './router.js'



Vue.use(VueRouter)

const routes = [
  otherRouters,
  ...appRouters  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
