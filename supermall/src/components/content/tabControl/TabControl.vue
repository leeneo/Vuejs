<template>
    <div class="tab-control">
        <div v-for="(item,index) in titles" :key="item" class="item" :class="{active:index===currentIndex}"
            @click="itemClick(index)">
            <span>{{item}}</span>
        </div>
    </div>
</template>
<script>
    export default {
        name: "TabControl",
        props: {
            titles: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        data() {
            return {
                currentIndex: 0
            }
        },
        methods: {
            itemClick(index){
                this.currentIndex=index;
                this.$emit('tabClick',index);
            }
        }
    }
</script>
<style lang="css">
    .tab-control {
        display: flex;
        text-align: center;
        height: 40px;
        line-height: 40px;
        font-size: 16px;
        background-color: rgb(255, 255, 255);
        z-index: 9;
    }

    .tab-control .item {
        flex: 1;
    }

    .tab-control .active {
        color: var(--color-high-text);
    }

    .tab-control .item span {
        padding: 5px;
    }

    .tab-control .active span {
        border-bottom: 2px solid var(--color-tint);
    }
</style>