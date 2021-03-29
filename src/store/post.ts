import Vue from 'vue'
import Vuex from 'vuex'
import { readPostApi } from '../api/post'
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


const post = {
  state: {
    post: null,
    data: null,
    error: null,
    loading: false,
  },
  mutations:{
    ...createExtra('POST', readPostApi).mutations,
  },
  actions:{
    ...createExtra('POST', readPostApi).actions
  },
}

export default post