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
    <spinner class="loading" v-if="versions === null || master === null" />
  </div>
</template>

<script>
  import moment from 'moment';
  import HomeDownloadDevItem from './HomeDownloadDevItem.vue';
  import HomeDownloadDevMaster from './HomeDownloadDevMaster.vue';
  import Spinner from './Spinner.vue';

  export default {
    name: 'home-download-dev',
    components: {
      HomeDownloadDevItem,
      HomeDownloadDevMaster,
      Spinner,
    },
    asyncComputed: {
      async master() {
        const redirectorUrl = 'https://bitrise-redirector.herokuapp.com/v0.1/apps/f841f20d8f8b1dc8/builds/master/artifacts/0/info';
        const build = await this.$http.get(redirectorUrl);
        return {
          released: build.body.finished_at,
          download: build.body.public_install_page_url,
          build: build.body.build_number,
          url: build.body.build_url,
          commitUrl: build.body.commit_view_url,
        };
      },
      async versions() {
        const response = await this.$http.get('https://api.github.com/repos/wulkanowy/wulkanowy/pulls?state=open');
        return (await Promise.all(response.body.map(async (release) => {
          const redirectorUrl = `https://bitrise-redirector.herokuapp.com/v0.1/apps/f841f20d8f8b1dc8/builds/${release.head.ref}/artifacts/0/info`;
          const build = await this.$http.get(redirectorUrl);
          return {
            title: release.title,
            number: release.number,
            released: build.body.finished_at,
            github: release.html_url,
            download: build.body.public_install_page_url,
            url: build.body.build_url,
            build: build.body.build_number,
            avatar: release.user.avatar_url,
            user: release.user.login,
            commit: release.head.sha,
            id: release.id,
          };
        }))).sort((a, b) => {
          if (moment(a.released).isBefore(b.released)) return 1;
          if (moment(a.released).isAfter(b.released)) return -1;
          return 0;
        });
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
