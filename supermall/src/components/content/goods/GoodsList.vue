<template>
    <div class="goods">
        <goods-list-item v-for="item in childsGoods" :key="item.iid" :childItem="item" />
    </div>
</template>
<script>
    import GoodsListItem from './GoodsListItem'

    export default {
        name: "GoodsList",
        components: {
            GoodsListItem
        },
        props: {
            childsGoods: {
                type: Array,
                default() {
                    return []
                }
            }
        }
    }
</script>
<style scoped>
    .goods {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding: 2px;
    }
</style>