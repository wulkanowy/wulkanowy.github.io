<template>
  <div class="download-dev-item">
    <a
      class="title"
      :href="github"
      target="_blank">
      {{ title }} <span class="number">#{{ number }}</span>
    </a>
    <div class="subheader">
      <span class="build-number">{{ build }}</span>
      <span class="released" :title="releasedString">{{ releasedRelativeString }}</span>
      <img class="avatar" :src="avatar" />
      <span class="user">{{ user }}</span>
    </div>
    <div class="buttons">
      <a class="github-button" :href="github" target="_blank" title="GitHub">
        <span class="mdi mdi-github-circle"></span>
      </a>
      <a class="download-button" :href="download" target="_blank" title="Download">
        <span class="mdi mdi-download"></span>
      </a>
    </div>
  </div>
</template>

<script>
import moment from 'moment';

moment.locale('pl');

export default {
  name: 'home-download-dev-item',
  props: {
    title: {
      type: String,
    },
    released: {
      type: String,
    },
    number: {
      type: Number,
    },
    build: {
      type: Number,
    },
    github: {
      type: String,
    },
    download: {
      type: String,
    },
    avatar: {
      type: String,
    },
    user: {
      type: String,
    },
  },
  computed: {
    releasedString() {
      return moment(this.released).format('dddd, D MMM YYYY HH:mm:ss');
    },
    releasedRelativeString() {
      const string = moment(this.released).fromNow();
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
  },
};
</script>

<style lang="scss" scoped>
  .download-dev-item {
    min-height: 56px;
    padding: 8px;
    padding-left: 16px;
    display: grid;
    grid-template-rows: 1fr auto auto 1fr;
    grid-template-columns: 1fr auto;
    background-color: #fff;
    border-radius: 4px;
    box-shadow:
      0px 3px 1px -2px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14),
      0px 1px 5px 0px rgba(0, 0, 0, 0.12);
    margin-top: 16px;

    &:last-child {
      margin-bottom: 8px;
    }
  }

  .title {
    grid-column: 1;
    grid-row: 2;
    color: #D32F2F;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    margin-bottom: 8px;
    line-height: 24px;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }

    .number {
      color: #0009;
      font-weight: 300;
    }
  }

  .subheader {
    grid-column: 1;
    grid-row: 3;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    .build-number {
      color: #0009;
    }

    .released {
      margin-left: 4px;
      color: #0006;
    }

    .avatar {
      width: 16px;
      height: 16px;
      margin-left: 8px;
      border-radius: 2px;
      box-shadow:
        0px 3px 1px -2px rgba(0, 0, 0, 0.2),
        0px 2px 2px 0px rgba(0, 0, 0, 0.14),
        0px 1px 5px 0px rgba(0, 0, 0, 0.12);
    }

    .user {
      color: #0009;
      margin-left: 4px;
    }
  }

  .buttons {
    display: flex;
    flex-direction: row;
    grid-column: 2;
    grid-row: 1/5;

    .github-button, .download-button {
      font-size: 32px;
      color: #000;
      padding: 4px;
      margin: 4px 4px;
      display: block;
      align-self: center;
    }
  }
</style>
