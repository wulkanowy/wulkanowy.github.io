<template>
  <div class="download-beta">
    <home-download-beta-item
      v-for="version in versions"
      :key="version.id"
      :code="version.code"
      :released="version.released"
      :github="version.github"
      :download="version.download" />
    <spinner class="loading" v-if="versions === null" />
  </div>
</template>

<script>
import HomeDownloadBetaItem from './HomeDownloadBetaItem.vue';
import Spinner from './Spinner.vue';

export default {
  name: 'home-download-beta',
  components: {
    HomeDownloadBetaItem,
    Spinner,
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
    margin-top: 16px;
    margin-left: auto;
    margin-right: auto;
  }
</style>
