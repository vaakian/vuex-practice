// 根级别的actions
const actions = {
  /*  
  其实穿传过来的对象是 {commit: *, state: *, dispatch: *}
  使用结构就可以直接拿来用，如showMsg(context){} 那么需要使用context.commit调用commit
  仅适用于actions
  actions第一个context{commit, state, dispatch} store对象
  mutations,getters,setters第一个是state
  
  */
  showMsg({ commit, state, dispatch}) {
    console.log(this)
    console.log(state.msg)
    // commit('someMutations', arg)
  }
}


export default actions //原对象
// export default {
//   actions   错误，会读到一个actions: actions对象
// }
