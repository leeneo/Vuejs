<template>
  <div id="tab_bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
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
  background-color: #f6f6f6;
  box-shadow: 0px 0px 1px 0px rgb(93 149 149);
}

#tab_bar .tab_bar_item {
  flex-grow: 1;
  text-align: center;
  height: 49px;
  line-height: 49px;
  border: 1px solid;
}

#tab_bar .tab_bar_item img {
  height: 24px;
}
</style>
