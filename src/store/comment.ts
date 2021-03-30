import Vue from 'vue'
import Vuex from 'vuex'
import { readCommentApi } from '../api/comment'
import createExtra from './lib'
import { IComment } from './writecomment'

Vue.use(Vuex)
export interface ICommentsState {
    comments: IComment[] | null
    data: { comments: IComment[] } | null
    error : string | null
    loading : boolean
}

const CHANGE_COMMENTS = 'CHANGE_COMMENTS'

const comment = {
  state: {
    comments: null,
    data: null,
    error: null,
    loading: false,
  },
  mutations:{
    ...createExtra('COMMENT', readCommentApi).mutations,
    [CHANGE_COMMENTS] (state : ICommentsState, payload : { data : any } ) : any {
      state.data = payload.data
    }
  },
  actions:{
    ...createExtra('COMMENT', readCommentApi).actions
  },
}

export default comment