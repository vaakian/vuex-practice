import actions from './actions'
import mutations from './mutations'
import getters from './getters'


const state = {
  msg: 'hello, i am'
}

export default {
  // 不然这个就变成了根store的属性&方法了
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}