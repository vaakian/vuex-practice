import api from '@/api'


const actions = {
  // randQuestion: (context, count) => {
    randQuestion({commit, state}, count) {
      console.log(api)
      api.randQuestion({
        count: count,
        isfav: 2,
        cg: 0,
        usr: 'admin',
        token: '6ddba112bb34fdbe83d53e71ee7e7574'
      })
      .then(res => {
        commit('SET_QUESTION', res.data.data)
      })
      .catch(err => {
        console.log(err)
      })
    },
    getCategories({commit, state}) {

      
      api.getCategories()
      .then(res => {
        if(res.status == 200)
          state.categories = res.data
      })
      .catch(err => {
        console.log(err)
      })
    }
    // count无值时为mouseEvent
    // console.log(context, count)
  
}

export default actions 