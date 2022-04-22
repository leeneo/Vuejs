import { ADD_COUNT, ADD_TO_CART } from "./mutation-types";

export default {
  // 将计数函数抽离出来方便跟踪
  [ADD_COUNT](state, payload) {
    payload.count++;
  },
  // 添加新商品函数
  [ADD_TO_CART](state, payload) {
    payload.checked = true;
    state.cartList.push(payload);
  },
};
