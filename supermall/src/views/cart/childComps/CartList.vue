<template lang="zh">
    <div class="cart-list">
        <!-- <scroll class="wrapper">
            <div class="content">

            </div>
        </scroll> -->
        <ul>
            <li v-for="item in cartList">{{item}}</li>
        </ul>
    </div>
</template>
<script>
    // import Scroll from "components/common/scroll/Scroll";

    import { mapGetters } from 'vuex'

    export default {
        name: 'CartList',
        components: {
            // Scroll
        },
        computed: {
            ...mapGetters(['cartList'])
        }
    }
</script>
<style lang="css" scoped>
    /* .wrapper {
        position: absolute;
        top: 44px;
        bottom: 49px;
        left: 0;
        right: 0;
        overflow: hidden;
    } */
</style>