<template>
  <div class="download-version-switcher">
    <span
      class="section-name section-name-beta"
      :class="{ active: active == 'beta' }"
      @click="active = 'beta'">BETA</span>
    <div class="devider" />
    <span
      class="section-name section-name-dev"
      :class="{ active: active == 'dev' }"
      @click="active = 'dev'">DEV</span>
  </div>
</template>

<script>
export default {
  name: 'home-download-version-switcher',
  components: {
  },
  props: {
    activeSection: Object,
    default: {},
  },
  computed: {
    active: {
      get() {
        return this.activeSection.data;
      },
      set(value) {
        this.$ga.event({
          eventCategory: 'dev-section',
          eventAction: 'switch',
          eventLabel: value,
          eventValue: value === 'beta' ? 0 : 1,
        });
        this.activeSection.data = value;
      },
    },
  },
};
</script>

<style lang="scss" scoped>
  .download-version-switcher {
    height: 32px;
    display: flex;
    direction: row;
    margin-bottom: 16px;
    margin-left: auto;
    margin-right: auto;
  }

  .section-name {
    min-width: 128px;
    font-size: 28px;
    line-height: 32px;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    margin: 0;
    color: #0008;
    cursor: pointer;

    &.active {
      font-weight: 400;
      color: #D32F2F;
    }
  }

  .section-name-beta {
    text-align: right;
  }

  .section-name-dev {
    text-align: left;
  }

  .devider {
    width: 0;
    border: 1px solid #0006;
    height: 100%;
    margin: 0 8px;
  }
</style>
