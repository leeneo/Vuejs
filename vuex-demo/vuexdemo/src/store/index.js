import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import moduleA from './modules/moduleA'


Vue.use(Vuex)


const state = {
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
  ],
  info: {
    name: 'hermin',
    age: 18,
    sex: 'female'
  }
}

// 把需要在组件间共享的变量定义在 soter 中
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    a: moduleA
  }
});
