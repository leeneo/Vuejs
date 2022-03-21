<template>
  <div class="tab_bar_item">
    <slot name="item-icon">icon</slot>
    <slot name="item-icon-active"></slot>
    <slot name="item-text">text</slot>
  </div>
</template>
<script>
export default {
  name: "TabBarItem",
  components: {},
};
</script>
<style>
#tab_bar {
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0;
  background-color: #f6f6f6;
  box-shadow: 0px 0px 1px 0px rgb(93 149 149);
}

#tab_bar .tab_bar_item {
  text-align: center;
  flex-grow: 1;
  height: 49px;
  font-size: 14px;
}

#tab_bar .tab_bar_item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  margin-bottom: 2px;
  vertical-align: middle;
}
</style>
