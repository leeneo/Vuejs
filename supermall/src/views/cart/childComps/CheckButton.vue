<template lang="zh">
    <div class="check-button" :class="{checked:isChecked}">
        <img src="~assets/img/cart/tick.svg" alt="">
    </div>
</template>
<script>
    export default {
        name: 'CheckButton',
        props: {
            isChecked: {
                type: Boolean,
                default: false
            }
        }
    }
</script>
<style lang="css" scoped>
    .check-button {
        border-radius: 50%;
        border: 2px solid #aaa;
        height: 20px;
        line-height: 20px;
        margin-right: 2px;
    }

    .checked {
        background-color: orange;
        border-color: orange;
    }
</style>