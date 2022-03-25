export default {
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