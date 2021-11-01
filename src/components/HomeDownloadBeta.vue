<template>
  <div class="download-beta">
    <home-download-beta-item
      v-for="version in versions"
      :key="version.id"
      :code="version.code"
      :released="version.released"
      :github="version.github"
      :download="version.download" />
    <spinner class="loading" v-if="loading" />
    <home-download-load-more-button
      v-if="moreLink !== null && !loading"
      @click="loadMore"
    />
  </div>
</template>

<script>
  import HomeDownloadBetaItem from './HomeDownloadBetaItem.vue';
  import HomeDownloadLoadMoreButton from './HomeDownloadLoadMoreButton.vue';
  import Spinner from './LoadingSpinner.vue';

  export default {
    name: 'home-download-beta',
    components: {
      HomeDownloadBetaItem,
      HomeDownloadLoadMoreButton,
      Spinner,
    },
    data: () => ({
      versions: [],
      moreLink: 'https://api.github.com/repos/wulkanowy/wulkanowy/releases',
      loading: false,
    }),
    async created() {
      await this.loadMore();
    },
    methods: {
      async loadMore() {
        if (this.loading || this.moreLink === null) return;
        this.loading = true;
        try {
          const response = await this.$http.get(this.moreLink);
          this.versions.push(...response.body.map((release) => ({
            code: release.tag_name,
            released: release.published_at,
            github: release.html_url,
            download: release.assets.length === 0 ? release.html_url : release.assets[0].browser_download_url,
            id: release.id,
          })));
          const nextLinkRegex = /<([^<>]+)>; ?rel="next"/;
          const match = nextLinkRegex.exec(response.headers.get('link'));
          this.moreLink = match === null ? null : match[1];
        } catch (error) {
          console.error(error);
        }
        this.loading = false;
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
