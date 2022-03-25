  // 同步更新数据

  import {
    INCREMENT,
    DECREMENT
  } from "./mutation-types";

  export default {
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
  }
