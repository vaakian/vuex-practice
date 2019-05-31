// store 入口
import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home/index'
import user from './modules/user/index'
// import state from './state'
// import actions from './actions'
// import mutations from './mutations'
Vue.use(Vuex)

const state = {
  msg: 'msg from root.'
}
/* eslint-disable */
export default new Vuex.Store({
  modules: { // 使用store.state.home访问
    home,
    user
    // a: home  store.state.a
  },
  state
  // state,
  // actions,
  // mutations
})