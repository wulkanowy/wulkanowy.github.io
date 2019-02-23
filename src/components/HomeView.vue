<template>
  <div id="home">
    <home-main-section />
  </div>
</template>

<script>
import HomeMainSection from './HomeMainSection.vue';

export default {
  name: 'home-view',
  components: {
    HomeMainSection,
  },
};
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500');

  body {
    margin: 0;
  }
</style>
