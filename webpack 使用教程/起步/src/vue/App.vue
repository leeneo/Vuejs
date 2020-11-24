<template>
  <div>
    <h4 class="title">{{msg}}</h4>
    {{name}} 的按钮点击事件：
    <button @click="btnClick">按钮</button>
    <Cpn></Cpn>
  </div>
</template>

<script>
    // 报错，要使用简写需在 webpack.config.js 中做相关配置
    import Cpn from './Cpn';

    export default {
        name: "App",
        data() {
            return {
                msg: "这是 webpack 配置的 vue 实例",
                name: "LiMing",
            }
        },
        methods: {
            btnClick() {
                console.log("按钮被点击了");
            },
        },
        components:{
            Cpn
        }
    };
</script>

<style scoped>
    .title {
        color: rgb(242, 255, 127);
    }
</style>