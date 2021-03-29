import Vue from 'vue'
import Vuex from 'vuex'
import { removeCommentApi } from '../api/comment'
import createExtra from './lib'

Vue.use(Vuex)
export interface IRemoveCommentForm {
  postId: string | null
  commentId: string | null
  content: string | null
  token: string | null
}

const removecomment = {
  state: {
    comment: null,
    data: null,
    error: null,
    loading: false,
  },
  mutations:{
    ...createExtra('REMOVECOMMENT', removeCommentApi).mutations,
  },
  actions:{
    ...createExtra('REMOVECOMMENT', removeCommentApi).actions
  },
}

export default removecomment