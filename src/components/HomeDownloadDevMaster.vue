<template>
  <div class="download-dev-master">
    <div class="title">Najnowsza stabilna wersja DEV</div>
    <div class="subheader">
      <a class="build-number" :href="url" @click="buildNumberClick">{{ build }}</a>
      <a
        class="released"
        :title="releasedString"
        :href="commitUrl"
        @click="releasedClick">
        {{ releasedRelativeString }}
      </a>
    </div>
    <div class="buttons">
      <a
        class="download-button"
        :href="download"
        title="Download"
        @click="downloadClick">
        <span class="mdi mdi-download"></span>
      </a>
    </div>
  </div>
</template>

<script>
  import moment from 'moment';

  moment.locale('pl');

  export default {
    name: 'home-download-dev-master',
    props: {
      released: {
        type: String,
      },
      build: {
        type: Number,
      },
      download: {
        type: String,
      },
      commitUrl: {
        type: String,
      },
      url: {
        type: String,
      },
    },
    methods: {
      buildNumberClick() {
        this.$ga.event({
          eventCategory: 'dev-master-item',
          eventAction: 'build-number-click',
        });
      },
      releasedClick() {
        this.$ga.event({
          eventCategory: 'dev-master-item',
          eventAction: 'released-click',
        });
      },
      downloadClick() {
        this.$ga.event({
          eventCategory: 'dev-master-item',
          eventAction: 'download-click',
        });
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
  .download-dev-master {
    min-height: 56px;
    padding: 8px 8px 8px 16px;
    display: grid;
    grid-template-rows: 1fr auto auto 1fr;
    grid-template-columns: 1fr auto;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  }

  .title {
    grid-column: 1;
    grid-row: 2;
    color: #D32F2F;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    margin-bottom: 8px;
    line-height: 24px;

    @media screen and (max-width: 450px) {
      font-size: 18px;
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

    .build-number {
      color: #0009;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    .released {
      margin-left: 4px;
      color: #0006;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .buttons {
    display: flex;
    flex-direction: row;
    grid-column: 2;
    grid-row: 1/5;

    .download-button {
      font-size: 32px;
      color: #000;
      padding: 4px;
      margin: 4px 4px;
      display: block;
      align-self: center;
    }
  }
</style>
