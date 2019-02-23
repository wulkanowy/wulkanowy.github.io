<template>
  <div id="home-main-section">
  </div>
</template>

<script>
export default {
  name: 'home-main-section',
  components: {

  },
};
</script>

<style lang="scss" scoped>
  #home-main-section {
    width: 100vw;
    height: 100vh;
    background:
      linear-gradient(
        rgba(0, 0, 0, 0.4),
        rgba(0, 0, 0, 0.4)
      ),
      url("../assets/wallpaper.jpg");
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    overflow: auto;
  }
</style>
