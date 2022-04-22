<template lang="zh">
    <div class="toast" v-show="isShow">
        <h4>{{message}}</h4>
    </div>
</template>
<script>
    export default {
        name: 'Toast',
        data() {
            return {
                message: '',
                isShow: false
            }
        },
        methods: {
            show(msg, delay=2000) {
                this.message = msg;
                this.isShow = true;
                setTimeout(() => {
                    this.isShow = false;
                    this.message = '';
                }, delay);
            }
        },
    }
</script>
<style lang="css" scoped>
    .toast {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #fff;
        background-color: rgba(0, 0, 0, .8);
        padding: 8px 10px;
        border-radius: 4px;
        z-index: 999;
    }
</style>