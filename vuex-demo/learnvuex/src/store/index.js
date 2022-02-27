import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 把需要在组件间共享的变量定义在 soter 中
export default new Vuex.Store({
  state: {
    counter: 0,
    students: [{
        id: 99,
        name: '99',
        age: 19
      },
      {
        id: 100,
        name: '100',
        age: 25
      },
      {
        id: 101,
        name: '101',
        age: 30
      },
      {
        id: 102,
        name: '102',
        age: 12
      },
    ]
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    }
  },
  actions: {

  },
  getters: {
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
  },
  modules: {

  }
});
