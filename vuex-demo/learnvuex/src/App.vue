<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <h2>调用 vuex 中的 ++++++++++++++++++++++++++++++++++++++</h2>
    <h2>计数器：{{ $store.state.counter }}</h2>

    <button @click="addtion">++</button>
    <button @click="subtraction">--</button>

    <h2>年龄大于20的学生：{{ $store.getters.bigThan20 }}</h2>
    <h2>年龄大于20的学生个数：{{ $store.getters.bigThan20Length }}</h2>
    <h2>年龄大于25的学生：{{ $store.getters.bigThanAge(25) }}</h2>

    <router-view :childCounter="$store.state.counter" />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      msg: "我是App组件"
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
    }
  }
};
</script>
