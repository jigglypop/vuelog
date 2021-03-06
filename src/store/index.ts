import Vue from 'vue'
import Vuex from 'vuex'
import login from './login'
import register from './register'
import check from './check'
import list from './list'
import post from './post'
import write from './write'
import writecomment from './writecomment'
import removecomment from './removecomment'
import comment from './comment'
import update from './update'
import remove from './remove'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    login,
    register,
    check,
    list,
    post,
    write,
    writecomment,
    removecomment,
    comment,
    update,
    remove
  }
})
