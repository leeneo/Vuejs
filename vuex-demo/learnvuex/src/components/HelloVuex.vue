<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>从父组件继承的：{{ childCounter}}</h2>
    <h2>调用 vuex 中的 ++++++++++++++++++++++++++++++++++++++</h2>
    <h2>计数器：{{ $store.state.counter}}</h2>
    <h2>年龄大于20的学生：{{ $store.getters.bigThan20}}</h2>
    <h2>年龄大于20的学生个数：{{ $store.getters.bigThan20Length}}</h2>
    <h2>年龄大于25的学生：{{ $store.getters.bigThanAge(25)}}</h2>
  </div>
</template>

<script>
export default {
  name: "HelloVuex",
  data() {
    return {
      msg: "我是子组件",
    };
  },
  props: {
    childCounter: Number
  }
};
</script>
