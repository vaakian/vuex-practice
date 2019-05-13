import actions from './actions'
import mutations from './mutations'
import getters from './getters'
const state = {
  msg: 'A message from home.js store',
  students: [
    { name: '熊维建', age: 20 },
    { name: '李宇春', age: 15 },
    { name: '洛天依', age: 35 },
    { name: '马云', age: 25 },
    { name: '刘强东', age: 45 }
  ],
  questions: [
    { title: '加载中', A: '', B: '', C: '', D: '', answer: '' }
  ]
}


export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
