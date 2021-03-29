import Vue from 'vue'
import Vuex from 'vuex'
import { updateApi } from '../api/post'
import createExtra from './lib'

Vue.use(Vuex)
const update = {
  state: {
    updateform: {
      title: '',
      content: '',
      token:'',
    },
    data: null,
    error: null,
    loading: false,
  },
  mutations:{
    ...createExtra('UPDATE', updateApi).mutations,
  },
  actions:{
    ...createExtra('UPDATE', updateApi).actions
  },
}

export default update