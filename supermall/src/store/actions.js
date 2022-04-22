import { ADD_COUNT, ADD_TO_CART } from "./mutation-types";

export default {
  // 供detail调用的添加到购物车action
  addCartAction(context, payload) {
    return new Promise((resolve) => {
      // 判断购物车是不是已有该商品，新商品直接添加，已有的话，count+1;
      // 这里不能省略return,否则程序运行结果不正确
      let oldProduct = context.state.cartList.find((item) => {
        return item.iid === payload.iid;
      });

      // 现有商品数量+1
      if (oldProduct) {
        {
          context.commit(ADD_COUNT, oldProduct);
          resolve("当前商品的数量+1");
        }
      }
      // 添加新的商品
      else {
        payload.count = 1;
        context.commit(ADD_TO_CART, payload);
        resolve("添加了新的商品");
      }
    });
  },
};
