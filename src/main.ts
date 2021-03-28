import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
const loadUser = () =>{
  try{
    const user = localStorage.getItem('user')
    if (!user) return
    const _user = JSON.parse(user)
    store.dispatch('CHECK', { token : _user.token })
  }catch(e){
    console.log('로컬 스토리지 오류')
  }
}
loadUser()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
