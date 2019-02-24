<template>
  <div class="download-beta">
    <home-download-beta-item
      v-for="version in versions"
      :key="version.id"
      :code="version.code"
      :released="version.released"
      :github="version.github"
      :download="version.download" />
    <div v-if="versions === null" class="loading">Loading</div>
  </div>
</template>

<script>
import HomeDownloadBetaItem from './HomeDownloadBetaItem.vue';

export default {
  name: 'home-download-beta',
  components: {
    HomeDownloadBetaItem,
  },
  asyncComputed: {
    async versions() {
      const response = await this.$http.get('https://api.github.com/repos/wulkanowy/wulkanowy/releases');
      return response.body.map(release => ({
        code: release.tag_name,
        released: release.published_at,
        github: release.html_url,
        download: release.assets[0].browser_download_url,
        id: release.id,
      }));
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
    },
  },
};
</script>

<style lang="scss" scoped>
  .download-beta {
    overflow: auto;
    padding-left: 8px;
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

  .loading {
    text-align: center;
    margin-top: 16px;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    margin-left: auto;
    margin-right: auto;
    font-size: 24px;
  }
</style>
