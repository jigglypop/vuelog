import Vue from 'vue'
import Vuex from 'vuex'
import { writeApi } from '../api/post'
import createExtra from './lib'

Vue.use(Vuex)
export interface IPost{
    title: string;
    content: string;
    tags: string[];
    createdAt: Date;
    user : {
        _id : string;
        profileId: string;
        username : string;
        permission : number;
        imageurl : string;
        nickname: string;
        type: string;
    }
    userlike : string[]
    groupId : string;
}
export interface IPostState {
    post: IPost | null
    data: { post: IPost } | null
    error : string | null
    loading : boolean
}


const write = {
  state: {
    writeform: {
      title: '',
      content: '',
      token:'',
    },
    data: null,
    error: null,
    loading: false,
  },
  mutations:{
    ...createExtra('WRITE', writeApi).mutations,
  },
  actions:{
    ...createExtra('WRITE', writeApi).actions
  },
}

export default write