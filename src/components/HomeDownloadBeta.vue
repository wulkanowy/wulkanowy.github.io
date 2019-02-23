<template>
  <div class="download-beta">
    <home-download-beta-item
      v-for="version in versions"
      :key="version.code"
      :code="version.code"
      :released="version.released" />
  </div>
</template>

<script>
import HomeDownloadBetaItem from './HomeDownloadBetaItem.vue';

export default {
  name: 'home-download-beta',
  components: {
    HomeDownloadBetaItem,
  },
  computed: {
    versions() {
      // return [
      //   {
      //     code: '0.7.0',
      //     released: '2019-02-22T21:14:07Z',
      //   },
      //   {
      //     code: '0.6.9',
      //     released: '2019-02-15T21:14:07Z',
      //   },
      //   {
      //     code: '0.6.8',
      //     released: '2019-01-08T21:14:07Z',
      //   },
      //   {
      //     code: '0.7.0',
      //     released: '2019-02-22T21:14:07Z',
      //   },
      //   {
      //     code: '0.6.9',
      //     released: '2019-02-15T21:14:07Z',
      //   },
      //   {
      //     code: '0.6.8',
      //     released: '2019-01-08T21:14:07Z',
      //   },
      //   {
      //     code: '0.7.0',
      //     released: '2019-02-22T21:14:07Z',
      //   },
      //   {
      //     code: '0.6.9',
      //     released: '2019-02-15T21:14:07Z',
      //   },
      //   {
      //     code: '0.6.8',
      //     released: '2019-01-08T21:14:07Z',
      //   },
      //   {
      //     code: '0.7.0',
      //     released: '2019-02-22T21:14:07Z',
      //   },
      //   {
      //     code: '0.6.9',
      //     released: '2019-02-15T21:14:07Z',
      //   },
      //   {
      //     code: '0.6.8',
      //     released: '2019-01-08T21:14:07Z',
      //   },
      // ];
      return null;
    },
  },
};
</script>

<style lang="scss" scoped>
  .download-beta {
    overflow: auto;
    padding-right: 8px;

    &::-webkit-scrollbar-track {
      border-radius: 4px;
      background-color: transparent;
    }

    &::-webkit-scrollbar {
      width: 8px;
      background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 4px;
      background-color: #aaa;
    }
  }
</style>
