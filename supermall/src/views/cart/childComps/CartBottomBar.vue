<template lang="zh">
    <div class="cart-bottom-bar">
        <div class="check-content">
            <check-button :isChecked="isAllChecked" @click.native="checkAllClick"></check-button>
            <span>全选</span>
        </div>
        <div class="check-content price">
            <span>合计：￥{{totalPrice}}</span>
        </div>
        <div class="check-content buyBill" @click="buyBillClick">
            <span>去结算：({{checkedCount}})</span>
        </div>
    </div>
</template>
<script>
    import CheckButton from './CheckButton'
    import { mapGetters } from 'vuex'

    export default {
        name: 'CartBottomBar',
        components: {
            CheckButton
        },
        computed: {
            ...mapGetters(['cartList']),
            totalPrice() {
                return this.cartList.filter(item => {
                    return item.checked
                }).reduce((preValue, item) => {
                    return (parseFloat(preValue) + (parseFloat(item.realPrice) * item.count)).toFixed(2)
                }, 0)
            },
            checkedCount() {
                // 京东算法，数量也会计算
                return this.cartList.filter(item => {
                    return item.checked;
                }).reduce((preValue, item) => {
                    return preValue + item.count;
                }, 0);
                // 淘宝算法，计件不计数量
                // return this.$store.getters.cartList.filter(item => {
                //     return item.checked;
                // }).length;
            }
            , isAllChecked() {
                if (this.cartList.length === 0) return false
                // return !(this.cartList.filter(item => {
                //     return !item.checked
                // }).length > 0);
                return !(this.cartList.find(item => { return !item.checked }));
            }
        },
        methods: {
            checkAllClick() {
                // 取消全选
                if (this.isAllChecked)
                    this.cartList.filter(item => {
                        return item.checked
                    }).forEach(item => item.checked = false)
                // 全选
                else
                    this.cartList.filter(item => {
                        return !item.checked
                    }).forEach(item => item.checked = true)
            },
            buyBillClick() {
                // 判断选择商品的件数，如果选择0件商品，提示，选择要购买的商品
                // 如果件数为0，flag=false,消息提示的判定条件则成立
                let flag = this.cartList.filter(item => { return item.checked }).length;
                if (!flag) {
                    this.$toast.show('请选择要购买的商品')
                }
            }
        },
    }
</script>
<style lang="css" scoped>
    .cart-bottom-bar {
        position: absolute;
        bottom: 50px;
        display: flex;
        width: 100%;
        height: 40px;
        line-height: 40px;
        background-color: #eee;
    }

    .check-content {
        display: flex;
        flex: 1;
        align-items: center;
        border-color: orange;
        margin-left: 4px;
    }

    .price,
    .buyBill {
        justify-content: center;
    }

    .price {
        font-size: 14px;
    }

    .buyBill {
        color: #fff;
        background-color: orangered;
    }
</style>