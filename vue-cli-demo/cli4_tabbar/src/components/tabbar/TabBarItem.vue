<template>
  <div class="tab_bar_item" @click="itemClick">
    <!-- <h2>{{ isActive }}</h2> -->
    <div v-if="!isActive">
      <slot name="item-icon">icon</slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :class="{ active: isActive }">
      <slot name="item-text">text</slot>
    </div>
  </div>
</template>
<script>
// import VueRouter from 'vue-router'

export default {
  name: "TabBarItem",
  data() {
    return {
      routes: this.$router.options.routes,
    };
  },
  computed: {
    isActive() {
      return !this.$route.path.indexOf(this.path);
    },
  },
  props: {
    path: {
      type: String,
    },
  },
  components: {},
  methods: {
    itemClick() {
      console.log(this.$route.path.indexOf(this.path));
      this.$router.replace(this.path);
    },
  },
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
#tab_bar .tab_bar_item .active {
  color: orange;
}
</style>
