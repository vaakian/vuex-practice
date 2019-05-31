

const actions = {
  SayHello(exporter, name=null) {
    const {commit, state, rootState} = exporter
    console.log(exporter)
    commit('SET_MSG', `hello, i am ${name}\n`);
    console.log(state.msg);
  }
}

export default actions;