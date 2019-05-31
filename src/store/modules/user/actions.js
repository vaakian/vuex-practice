

const actions = {
  SayHello({commit, state}, name=null) {
    
    commit('SET_MSG', `hello, i am ${name}\n`);
    console.log(state.msg);
  }
}

export default actions;