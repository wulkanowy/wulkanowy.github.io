<template>
  <div id="home">
    <home-main-section />
    <home-download-section />
  </div>
</template>

<script>
  import HomeMainSection from './HomeMainSection.vue';
  import HomeDownloadSection from './HomeDownloadSection.vue';

  export default {
    name: 'home-view',
    components: {
      HomeMainSection,
      HomeDownloadSection,
    },
  };
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500');

  body {
    margin: 0;
    scroll-behavior: smooth;
  }
</style>
