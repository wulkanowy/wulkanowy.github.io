<template>
  <div class="main home-section">
    <home-main-header />
  </div>
</template>

<script>
  import HomeMainHeader from './HomeMainHeader.vue';

  export default {
    name: 'home-main-section',
    components: {
      HomeMainHeader,
    },
  };
</script>

<style lang="scss" scoped>
  .main {
    height: 100vh;
    background: linear-gradient(
        rgba(0, 0, 0, 0.3),
        rgba(0, 0, 0, 0.3)
    ),
    url("../assets/wallpaper.jpg");
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    overflow: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
