const mutations = {
  SET_QUESTION: (state, questions) => {
    if(questions)
      state.questions = questions
  }
}

export default mutations