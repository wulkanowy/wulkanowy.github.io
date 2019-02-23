<template>
  <div id="download">
    <h2 class="title">Pobieranie</h2>
    <h3 class="section-name section-name-beta">Beta</h3>
    <h3 class="section-name section-name-dev">Dev</h3>
    <home-download-beta />
  </div>
</template>

<script>
import HomeDownloadBeta from './HomeDownloadBeta.vue';

export default {
  name: 'home-download-section',
  components: {
    HomeDownloadBeta,
  },
};
</script>

<style lang="scss" scoped>
  #download {
    height: 100vh;
    padding: 0 32px;
    overflow: hidden;
    background-color: #F6F6F6;
    display: grid;
    grid-template-columns: 1fr 32px 1fr;
    grid-template-rows: auto auto 1fr 64px;
  }

  .title {
    font-size: 32px;
    text-align: center;
    color: #D32F2F;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    grid-column: 1/4;
    grid-row: 1;
  }

  .section-name {
    font-size: 28px;
    text-align: center;
    color: #D32F2F;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    margin: 0;
    grid-row: 2;
  }

  .section-name-beta {
    grid-column: 1;
  }

  .section-name-dev {
    grid-column: 3;
  }

  .download-beta {
    grid-row: 3;
    grid-column: 1;
    margin-top: 8px;
  }
</style>
