<template>
  <div class="HomeMessages">
    <ul>
      <li>消息</li>
      <li>消息</li>
      <li>消息</li>
    </ul>
  </div>
</template>

<style></style>

<script>
export default {
  name: "HomeMessages",
  created() {
    document.title = this.$route.meta.title
  },
};
</script>
