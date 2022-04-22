import { ADD_COUNT, ADD_TO_CART } from "./mutation-types";

export default {
  // 将计数函数抽离出来方便跟踪
  [ADD_COUNT](state, payload) {
    payload.count++;
  },
  [ADD_TO_CART](state, payload) {
    state.cartList.push(payload);
  },
};
