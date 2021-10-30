<template>
  <div class="download-dev">
    <home-download-dev-master
      v-if="master"
      :released="master.released"
      :download="master.download"
      :url="master.url"
      :build="master.build"
      :commit-url="master.commitUrl" />
    <home-download-dev-item
      v-for="version in versions"
      :key="version.id"
      :title="version.title"
      :number="version.number"
      :released="version.released"
      :github="version.github"
      :download="version.download"
      :url="version.url"
      :avatar="version.avatar"
      :user="version.user"
      :build="version.build"
      :commit="version.commit" />
    <spinner class="loading" v-if="loading || master === null" />
    <home-download-load-more-button
      v-if="moreLink !== null && !loading"
      @click="loadMore"
    />
  </div>
</template>

<script>
  import moment from 'moment';
  import HomeDownloadDevItem from './HomeDownloadDevItem.vue';
  import HomeDownloadDevMaster from './HomeDownloadDevMaster.vue';
  import HomeDownloadLoadMoreButton from './HomeDownloadLoadMoreButton.vue';
  import Spinner from './Spinner.vue';

  export default {
    name: 'home-download-dev',
    components: {
      HomeDownloadDevItem,
      HomeDownloadDevMaster,
      HomeDownloadLoadMoreButton,
      Spinner,
    },
    data: () => ({
      master: null,
      versions: [],
      moreLink: 'https://api.github.com/repos/wulkanowy/wulkanowy/pulls?state=open',
      loading: false,
    }),
    async created() {
      await Promise.all([
        this.loadMaster(),
        this.loadMore(),
      ]);
    },
    methods: {
      async loadMaster() {
        const redirectorUrl = 'https://manager.wulkanowy.net.pl/v1/build/app/daeff1893f3c8128/branch/develop';
        const build = await this.$http.get(redirectorUrl);
        this.master = {
          released: build.body.data.finished_at,
          download: `https://manager.wulkanowy.net.pl/v1/download/app/daeff1893f3c8128/build/${build.body.data.build_slug}/artifact/${build.body.data.artifact_slug}`,
          build: build.body.data.build_number,
          url: build.body.data.build_url,
          commitUrl: build.body.data.commit_view_url,
        };
      },
      async loadMore() {
        if (this.loading || this.moreLink === null) return;
        this.loading = true;
        try {
          const response = await this.$http.get(this.moreLink);
          this.versions.push(
            ...(await Promise.all(response.body.map(async (release) => {
              const redirectorUrl = `https://manager.wulkanowy.net.pl/v1/build/app/daeff1893f3c8128/branch/${release.head.ref}`;
              const build = await this.$http.get(redirectorUrl).catch((error) => error);
              if (!build.body.success) {
                return {
                  title: release.title,
                  number: release.number,
                  github: release.html_url,
                  avatar: release.user.avatar_url,
                  user: release.user.login,
                  commit: release.head.sha,
                  id: release.id,
                };
              }
              return {
                title: release.title,
                number: release.number,
                github: release.html_url,
                released: build.body.data.finished_at,
                download: `https://manager.wulkanowy.net.pl/v1/download/app/daeff1893f3c8128/build/${build.body.data.build_slug}/artifact/${build.body.data.artifact_slug}`,
                url: build.body.data.build_slug,
                build: build.body.data.build_number,
                avatar: release.user.avatar_url,
                user: release.user.login,
                commit: release.head.sha,
                id: release.id,
              };
            }))).sort((a, b) => {
              if (moment(a.released).isBefore(b.released)) return 1;
              if (moment(a.released).isAfter(b.released)) return -1;
              return 0;
            }),
          );
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
  .download-dev {
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
