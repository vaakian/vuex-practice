const getters = {
  upperMsg: state => state.msg.toLocaleUpperCase(),
  // with arg, use object for mutipul args
  withArg: (state) => lessThan => {
    return state.students.filter(student => student.age < lessThan)
  }
}

export default getters