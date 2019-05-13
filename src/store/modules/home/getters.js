const getters = {
  upperMsg: state => state.msg.toLocaleUpperCase(),
  withArg: (state) => lessThan => {
    return state.students.filter(student => student.age < lessThan)
  }
}

export default getters