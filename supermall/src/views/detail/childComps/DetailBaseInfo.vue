<template lang="zh">
    <div class="base-info" v-if="Object.keys(baseInfo).length !== 0">
        <div class="info-title">{{baseInfo.title}}</div>
        <div class="info-price">
            <span class="n-price">{{baseInfo.newPrice}}</span>
            <span class="o-price">{{baseInfo.oldPrice}}</span>
            <span class="discount" v-if="baseInfo.discount">{{baseInfo.discount}}</span>
        </div>
        <div class="info-other">
            <span>{{sellAmount}}</span>
            <span>{{collectAmount}}</span>
            <span>{{shippingDate}}</span>
        </div>
        <div class="info-service">
            <span class="info-service-item" v-for="(item) in services">
                <img :src="item.icon" alt="">
                <span>{{item.name}}</span>
            </span>
        </div>
    </div>
</template>
<script>
    export default {
        name: "DetailBaseInfo",
        props: {
            baseInfo: {
                type: Object,
                default() {
                    return {};
                },
            },
        },
        computed: {
            sellAmount() {
                if (this.baseInfo.columns) return this.baseInfo.columns[0];
                else return "";
            },
            collectAmount() {
                if (this.baseInfo.columns) return this.baseInfo.columns[1];
                else return "";
            },
            shippingDate() {
                if (this.baseInfo.services)
                    return this.baseInfo.services[this.baseInfo.services.length - 1].name;
                else return "";
            },
            services() {
                let x = this.baseInfo.services;
                if (x)
                    return x.slice(0, x.length - 1);
                else
                    return [];
            }
        },
    };
</script>
<style lang="css" scoped>
    .base-info {
        margin-top: 15px;
        padding: 0 8px;
        color: #999;
        border-bottom: 5px solid #f2f5f8;
    }
    .info-title{
        color:#222;
    }
    .info-price{
        margin-top:10px;
    }
    .info-price .n-price{
        font-size:24px;
        color: var(--color-high-text);        
    }
    .info-price .o-price{
        font-size: 13px;
        margin-left:5px;
        text-decoration: line-through;
    }
    .info-price .discount{
        font-size:12px;
        padding:2px 5px;
        color:#fff;
        background-color: var(--color-high-text);
        border-radius: 8px;
        margin-left:5px;
        /* 让元素上浮一些 使用相对定位即可 */
        position: relative;
        top:-8px;
    }
    .info-other{
        margin-top:15px;
        line-height: 30px;
        display: flex;
        font-size: 13px;
        border-bottom: 1px solid rgba(100,100,100,.1);
        justify-content: space-between;
    }
    .info-service{
        display: flex;
        justify-content: space-between;
        line-height: 60px;
    }
    .info-service-item img{
        width: 14px;
        height: 14px;
        position: relative;
        top:2px
    }
    .info-service-item span{
        font-size: 13px;
        color: #333;
    }

</style>