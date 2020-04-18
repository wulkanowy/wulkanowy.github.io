<template>
  <div class="home">
    <home-main-section />
    <home-features-table-section />
    <home-download-section />
    <home-contact-form-section />
  </div>
</template>

<script>
  import HomeMainSection from '../components/HomeMainSection.vue';
  import HomeFeaturesTableSection from '../components/HomeFeaturesTableSection.vue';
  import HomeDownloadSection from '../components/HomeDownloadSection.vue';
  import HomeContactFormSection from '../components/HomeContactFormSection.vue';
  import '@mdi/font/css/materialdesignicons.min.css';

  export default {
    name: 'home-view',
    components: {
      HomeMainSection,
      HomeFeaturesTableSection,
      HomeDownloadSection,
      HomeContactFormSection,
    },
  };
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500');

  body {
    margin: 0;
  }
</style>
