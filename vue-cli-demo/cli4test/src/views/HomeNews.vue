<template>
  <div class="HomeNews">
      <ul>
          <li>新闻</li>
          <li>新闻</li>
          <li>新闻</li>
      </ul>
  </div>
</template>

<script>
export default {
  name: "HomeNews",
  created() {
    document.title=this.$route.meta.title;
  }
};
</script>
