import Vue from 'vue'
import Vuex from 'vuex'
import {
  INCREMENT,
  DECREMENT
} from "./mutation-types";

Vue.use(Vuex)

const moduleA = {
  state: {
    name: 'zhangsan'
  },
  mutations: {
    updateName(state, payload) {
      state.name += payload
    },
  },
  actions: {
    asyncUpdateName(context, payload) {
      setTimeout(() => {
        context.commit('updateName', payload)
        console.log(context);
      }, 1000);
    }
  },
  getters: {
    fullName(state) {
      return state.name + '11'
    },
    fullName2(state, getters) {
      return getters.fullName + '22'
    },
    fullName3(state, getters, rootState) {
      return getters.fullName2 + rootState.counter
    }
  }
}
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
    ],
    info: {
      name: 'hermin',
      age: 18,
      sex: 'female'
    }
  },
  // 同步更新数据
  mutations: {
    [INCREMENT](state) {
      state.counter++;
    },
    [DECREMENT](state) {
      state.counter--;
    },
    updateCount(state, num) {
      state.counter += num;
    },
    updateStu(state, addStu) {
      state.students.push(addStu)
    },
    updatePayload(state, payload) {
      // console.log(payload);
      state.counter += payload.num
    },
    updateInfo(state) {
      // 这些对数据的修改都是响应式的
      // 但是 vue 之前的版本（除了vue.set|vue.delete 以及修改原有数据项时）都是非响应式的
      state.info.name = 'harry';
      // 模拟异步，mutations 里面写异步是错误方式
      // setTimeout(() => {
      //   state.info.name = '异步函数 devtools 跟踪不到';
      // }, 1000);
      // state.info.height = 20;
      // state.info['addr'] = 'ffff';
      // delete state.info.sex;
      Vue.set(state.info, 'addr', '英国');
      Vue.delete(state.info, 'age');
    }
  },
  // 异步更新数据
  actions: {
    aUpdateInfo(context, payload) {
      // 普通的action
      // setTimeout(() => {
      //   context.commit('updateInfo');
      //   console.log(payload.data);
      //   payload.success();
      // }, 1000);

      // promise action
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('updateInfo');
          console.log(payload);
          resolve('异步成功后 action 返回的数据');
        }, 1000);
      })
    }
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
    a: moduleA
  }
});
