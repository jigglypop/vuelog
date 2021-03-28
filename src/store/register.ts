import Vue from 'vue'
import Vuex from 'vuex'
import { registerApi } from '../api/auth'
import createExtra from './lib'

Vue.use(Vuex)
export interface IResiter {
  register: IResiterForm
  data: { user: IUser } | null
  error : string | null
  loading : boolean
}

export interface IResiterForm {
  username: string | null
  email: string | null
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

const register = {
  state: {
    register: {
      username: '',
      email: '',
      password: '',
    },
    data: null,
    error: '',
    loading: false,
  },
  mutations:{
    ...createExtra('REGISTER', registerApi).mutations
  },
  actions:{
    ...createExtra('REGISTER', registerApi).actions
  }
}

export default register