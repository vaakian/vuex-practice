

const mutations = {
  SET_MSG(state, msg) {
    state.msg = msg.toLocaleUpperCase();
  }
}

export default mutations;