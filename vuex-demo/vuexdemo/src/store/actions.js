  // 异步提交方法更新数据

  export default {
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
  }
