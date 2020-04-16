import Vue from 'vue'
import VueRouter from 'vue-router'
import {appRouters, otherRouters, articleDetailRouter} from './router.js'



Vue.use(VueRouter)



const routes = [
  otherRouters,
  ...appRouters,
  articleDetailRouter
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) =>{
  // 判断是否未登录就进入个人中心
  to.matched.forEach((item, index) => {
    if(item.name == 'personalCenter' && localStorage.getItem('jwt') == undefined){
        next('/');
        return;
    }
  })
  next();
})

export default router
