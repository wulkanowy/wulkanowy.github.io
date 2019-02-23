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
  body {
    margin: 0;
  }
</style>
