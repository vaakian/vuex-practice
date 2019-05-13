// 根级别的mutations
const mutations = {
  // mutations 第一个参数是state对象
  showMsg(state, {myMsg, myName}) {
    console.log(this)
    console.log(state.msg)
  }
}
// commit('showMsg', 1)调用mutations
// dispatch('showMsg', 1)调用actions

export default mutations //原对象
// export default {
//   mutations   错误，会读到一个mutations: mutations对象
// }
