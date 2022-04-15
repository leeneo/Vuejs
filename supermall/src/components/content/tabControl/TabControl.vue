<template>
    <div class="tabControl">
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
            }
        }
    }
</script>
<style lang="css">
    .tabControl {
        display: flex;
        text-align: center;
        height: 40px;
        line-height: 40px;
        font-size: 16px;
        background-color: rgb(255, 255, 255);
    }

    .tabControl .item {
        flex: 1;
    }

    .tabControl .active {
        color: var(--color-high-text);
    }

    .tabControl .item span {
        padding: 5px;
    }

    .tabControl .active span {
        border-bottom: 2px solid var(--color-tint);
    }
</style>