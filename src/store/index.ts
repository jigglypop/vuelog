import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import AxiosService from '@/service'
import { SET_ACCESS_TOKEN } from './mutation-types'

Vue.use(Vuex)

export interface RootState {
  token: string;
}

export default new Vuex.Store({
  state: {
    token: "",
  },
  mutations: {
    [SET_ACCESS_TOKEN] (state, token){
      if (token){
        state.token = token
      }
    }
  },
  actions: {
    async register({ commit }, payload:{ username: string, password: string}){
      try {
        const res = await AxiosService.instance.post(
          `/api/auth/login`, {
              "user": {
                "username": payload.username,
                "password": payload.password
            }
          })
        await commit(SET_ACCESS_TOKEN, res.data.user.token)
        return res.data
      } catch(err){
        console.log(err.message)
      }
    }
  },
  modules: {
  }
})
