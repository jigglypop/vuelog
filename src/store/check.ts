import Vue from 'vue'
import Vuex from 'vuex'
import { checkApi } from '../api/auth'
import createExtra from './lib'

Vue.use(Vuex)
const check = {
  state: {
    check: {
      username: '',
      password: '',
    },
    data: null,
    error: null,
    loading: false,
  },
  mutations:{
    ...createExtra('CHECK', checkApi).mutations
  },
  actions:{
    ...createExtra('CHECK', checkApi).actions
  },
  
}

export default check