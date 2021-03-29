import Vue from 'vue'
import Vuex from 'vuex'
import { checkApi } from '../api/auth'
import createExtra from './lib'
import { IUser } from './login'

Vue.use(Vuex)
export interface ICheck {
  check: ICheckForm
  data: { user: IUser } | null
  error : string | null
  loading : boolean
}

export interface ICheckForm {
  username: string | null
  password: string | null
}

const LOGOUT = 'LOGOUT'

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
    ...createExtra('CHECK', checkApi).mutations,
    [LOGOUT] (state: ICheck)  {
      localStorage.clear()
      state.data = null
    }
  },
  actions:{
    ...createExtra('CHECK', checkApi).actions
  },
  
}

export default check