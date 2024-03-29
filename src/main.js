import Vue from 'vue'
import App from './App.vue'
import store from './store'
import ViewUI from 'view-design';
import './styles/icon.css';
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import 'view-design/dist/styles/iview.css';
import router from './router'
import axios from 'axios';
import {appRouters} from '@/router/router'


Vue.use(ViewUI);
Vue.use(mavonEditor)

Vue.prototype.$axios = axios.create({
  // baseURL:"http://localhost:30000"
  baseURL:'http://101.200.187.225:30000'
});

Vue.prototype.$axios.interceptors.request.use(function (config) {
  config.headers['Authorization'] = localStorage.getItem('jwt'); 
  config.headers['Accept'] = 'application/json';
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
Vue.prototype.$axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});


Vue.config.productionTip = false

new Vue({
  router,
  store,
  mounted(){
    this.$store.commit('initMenuList',  appRouters);
  },
  render: h => h(App)
}).$mount('#app')
