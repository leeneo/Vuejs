export default {
  bigThan20(state) {
    return state.students.filter(s => s.age > 20);
  },
  bigThan20Length(state, getters) { //state 不能省
    return getters.bigThan20.length;
  },
  bigThanAge(state) {
    // return function (age) {
    //   return state.students.filter(s => s.age > age);
    // }
    return age => {
      return state.students.filter(s => s.age > age)
    }
  },
}
