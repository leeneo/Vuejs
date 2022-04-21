<template lang="zh">
    <div class="detail-nav-bar">
        <nav-bar class="detail-nav">
            <div slot="left" class="title-img" @click="backClick">
                <img src="~assets/img/common/back.svg" alt="">
            </div>
            <div slot="center" class="title">
                <div v-for="(item,index) in titles" class="title-item" :class="{active:(curIndex==index)}"
                    @click="itemClick(index)">
                    {{item}}
                </div>
            </div>
        </nav-bar>
    </div>
</template>
<script>
    import NavBar from "components/common/navbar/NavBar";
    export default {
        name: "DetailNavBar",
        components: {
            NavBar,
        },
        data() {
            return {
                titles: ['商品', '参数', '评论', '推荐'],
                curIndex: 0,
                isActive: true
            }
        },
        methods: {
            itemClick(index) {
                this.curIndex = index;
                this.$emit('titleClick',index);
            },
            backClick() {
                this.$router.back();
            }
        }
    };
</script>
<style lang="css">
    .title {
        display: flex;
        font-size: 14px;
    }

    .title-item {
        flex: 1;
    }

    .active {
        color: var(--color-high-text);
    }

    .title-img img {
        vertical-align: middle;
    }
</style>