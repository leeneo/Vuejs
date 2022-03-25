<template>
  <div id="app">
    <h1>{{ msg }}</h1>

    <h2>----------------state----------------</h2>
    <h2>调用 vuex 中的 state</h2>
    <h2>计数器：{{ $store.state.counter }}</h2>
    <h2>响应式 state 数据：{{ $store.state.info }}</h2>

    <br />
    <h2>----------------mutations----------------</h2>
    <button @click="addtion">++</button>
    <button @click="subtraction">--</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStu">添加学生</button>
    <button @click="updatePayload(2)">payload 方式提交</button>
    <button @click="updateInfo">修改信息</button>
    <button @click="aUpdateInfo">异步修改信息</button>

    <br /><br /><br />
    <h2>----------------getters----------------</h2>
    <h2>年龄大于20的学生：{{ $store.getters.bigThan20 }}</h2>
    <h2>年龄大于20的学生个数：{{ $store.getters.bigThan20Length }}</h2>
    <h2>年龄大于25的学生：{{ $store.getters.bigThanAge(25) }}</h2>

    <h2>----------------modules----------------</h2>
    <h2>
      调用 vuex modules 中的 state： <span>{{ $store.state.a.name }}</span>
    </h2>
    <h2>
      getters: 
      <span>{{ $store.getters.fullName }}</span>
      <span>{{ $store.getters.fullName2 }}</span>
      <span>{{ $store.getters.fullName3 }}</span>
    </h2>
    <button @click="updateName">修改名字</button>
    <button @click="asyncUpdateName">异步修改名字</button>

    <hr />
    <router-view :childCounter="$store.state.counter" />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      msg: "我是App组件",
      studentDemo: {
        id: 102,
        name: "102",
        age: 39
      }
    };
  },
  // computed:{
  //   bigThan20(){
  //     return this.$store.state.students.filter(s=>s.age>20);
  //   }
  // },
  methods: {
    addtion() {
      this.$store.commit("increment");
    },
    subtraction() {
      this.$store.commit("decrement");
    },
    // 普通的提交封装
    addCount(num) {
      this.$store.commit("updateCount", num);
    },
    // 特殊的提交封装
    updatePayload(num) {
      this.$store.commit({
        type: "updatePayload",
        num
      });
    },
    addStu() {
      this.studentDemo.id += 1;
      console.log(this.studentDemo.id);
      this.$store.commit("updateStu", this.studentDemo);
    },
    updateInfo() {
      this.$store.commit("updateInfo");
    },
    aUpdateInfo() {
      // this.$store.dispatch("aUpdateInfo");
      // 普通的 action ,传递参数
      // let payload = {
      //   data: "异步提交的 payload 数据",
      //   success: () => {
      //     console.log("数据已成功支付");
      //   }
      // };
      // this.$store.dispatch("aUpdateInfo", payload);

      // promise action
      this.$store
        .dispatch("aUpdateInfo", "提交给 action 的 payload 数据")
        .then(res => {
          console.log("数据已成功支付");
          console.log(res);
        });
    },
    updateName() {
      this.$store.commit("updateName", "01");
    },
    asyncUpdateName() {
      this.$store.dispatch("asyncUpdateName", "02");
    }
  }
};
</script>
