<template>
  <div>
    {{name}} 的按钮点击事件：
    <button @click="btnClick">按钮</button>
  </div>
</template>

<script>
    export default {
        name: "Cpn",
        data() {
            return {
                name: "Cpn 组件",
            }
        },
        methods: {
            btnClick() {
                console.log("CPN 组件按钮被点击了");
            },
        },
    };
</script>

<style scoped>
    .title {
        color: rgb(242, 255, 127);
    }
</style>