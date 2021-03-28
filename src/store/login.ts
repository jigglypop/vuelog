import Vue from 'vue'
import Vuex from 'vuex'
import { loginApi } from '../api/auth'
import createExtra from './lib'

Vue.use(Vuex)
export interface ILogin {
  login: ILoginForm
  data: { user: IUser } | null
  error : string | null
  loading : boolean
}

export interface ILoginForm {
  username: string | null
  password: string | null
}

export interface IUser{
  username : string;
  email : string;
  hashedPassword: string;
  token: string;
  createdAt: Date;
  profile: IProfile
}

export interface IProfile{
  username : string;
  nickname :  string;
  email : string;
  imageurl : string;
  type : string;
  info : string;
  permission : number;
  postlike : string[];
  follower : string[];
  following : string[];
}

const login = {
  state: {
    login: {
      username: '',
      password: '',
    },
    data: null,
    error: '',
    loading: false,
  },
  mutations:{
    ...createExtra('LOGIN', loginApi).mutations
  },
  actions:{
    ...createExtra('LOGIN', loginApi).actions
  },
}

export default login