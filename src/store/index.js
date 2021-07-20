import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app.js';
import user from './modules/user.js';
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)



export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  plugins: [createPersistedState(app)],
  modules: {
    app,
    user
  }
})
