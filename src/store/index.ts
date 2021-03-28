import Vue from 'vue'
import Vuex from 'vuex'
import login from './login'
import register from './register'
import check from './check'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    login,
    register,
    check
  }
})
