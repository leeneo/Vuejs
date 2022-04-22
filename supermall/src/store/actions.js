import { ADD_COUNT, ADD_TO_CART } from "./mutation-types";

export default {
  addCart(context, payload) {
    // 判断购物车是不是已有该商品，新商品直接添加，已有的话，count+1;
    // 这里不能省略return,否则程序运行结果不正确
    let oldProduct = context.state.cartList.find((item) => {
      return item.iid === payload.iid;
    });

    //   console.log("oldProduct ", oldProduct);
    if (oldProduct) {
      context.commit(ADD_COUNT, oldProduct);
    } else {
      payload.count = 1;
      context.commit(ADD_TO_CART, payload);
    }
  },
};
