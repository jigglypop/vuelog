import Vue from 'vue'
import Vuex from 'vuex'
import { readListApi } from '../api/post'
import createExtra from './lib'
// import { Module, Mutation, Action, VuexModule } from 'vuex-module-decorators';

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
    // comment : IComment[]
}
export interface IPostState {
    post: IPost | null
    data: { post: IPost } | null
    error : string | null
    loading : boolean
}


const list = {
  state: {
    post: null,
    data: null,
    error: null,
    loading: false,
  },
  mutations:{
    ...createExtra('LIST', readListApi).mutations,
  },
  actions:{
    ...createExtra('LIST', readListApi).actions
  },
}

export default list