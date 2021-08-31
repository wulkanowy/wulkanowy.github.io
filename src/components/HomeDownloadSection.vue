<template>
  <div id="download" class="download home-section">
    <h2 class="title">Pobieranie</h2>
    <home-download-version-switcher v-if="$mq === 'md'" v-model="active" />
    <h3 class="section-name section-name-beta" v-if="$mq === 'lg'">STABILNA</h3>
    <h3 class="section-name section-name-dev" v-if="$mq === 'lg'">DEV</h3>
    <home-download-beta v-if="$mq === 'lg' || active === 'beta'" />
    <home-download-dev v-if="$mq === 'lg' || active === 'dev'" />
  </div>
</template>

<script>
  import HomeDownloadBeta from './HomeDownloadBeta.vue';
  import HomeDownloadDev from './HomeDownloadDev.vue';
  import HomeDownloadVersionSwitcher from './HomeDownloadVersionSwitcher.vue';

  export default {
    name: 'home-download-section',
    components: {
      HomeDownloadBeta,
      HomeDownloadDev,
      HomeDownloadVersionSwitcher,
    },
    data: () => ({
      active: 'beta',
    }),
  };
</script>

<style lang="scss" scoped>
  .download {
    height: 100vh;
    box-sizing: border-box;
    padding: 0 32px 32px;
    overflow: hidden;
    background-color: #F6F6F6;
    display: grid;
    grid-template-columns: 1fr 32px 1fr;
    grid-template-rows: auto auto 1fr;

    @media screen and (max-width: 875px) {
      grid-template-columns: 1fr;
      padding: 0 16px 16px;
    }

    @media screen and (max-width: 450px) {
      padding: 0 8px 16px;
    }
  }

  .title {
    font-size: 32px;
    text-align: center;
    color: #D32F2F;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    grid-column: 1/4;
    grid-row: 1;
    @media screen and (max-width: 875px) {
      grid-column: 1;
    }
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
    @media screen and (max-width: 875px) {
      grid-column: 1;
    }
  }

  .download-dev {
    grid-row: 3;
    grid-column: 3;
    margin-top: 8px;
    @media screen and (max-width: 875px) {
      grid-column: 1;
    }
  }
</style>
