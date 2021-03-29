import Vue from 'vue'
import Vuex from 'vuex'
import { writecommentApi } from '../api/comment'
import createExtra from './lib'

Vue.use(Vuex)
export interface IComment extends Document{
  user : {
      _id : string;
      profileId: string;
      username : string;
      permission : number;
      imageurl : string;
      nickname: string;
      type: string;
  }
  content : string;
  createdAt: Date;
  // recomment : IRecomment[]
}
export interface IWriteCommentForm {
  postId: string | null
  content: string | null
  token: string | null
}

const writecomment = {
  state: {
    comment: null,
    data: null,
    error: null,
    loading: false,
  },
  mutations:{
    ...createExtra('WRITECOMMENT', writecommentApi).mutations,
  },
  actions:{
    ...createExtra('WRITECOMMENT', writecommentApi).actions
  },
}

export default writecomment