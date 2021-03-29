import Vue from 'vue'
import Vuex from 'vuex'
import { removeApi } from '../api/post'
import createExtra from './lib'

Vue.use(Vuex)
const remove = {
  state: {
    data: null,
    error: null,
    loading: false,
  },
  mutations:{
    ...createExtra('REMOVE', removeApi).mutations,
  },
  actions:{
    ...createExtra('REMOVE', removeApi).actions
  },
}

export default remove