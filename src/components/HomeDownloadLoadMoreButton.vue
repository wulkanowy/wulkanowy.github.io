<template>
  <button
    class="home-download-load-more-button"
    @click="$emit('click', $event)"
  >
    Wczytaj więcej
  </button>
</template>

<script>
  export default {};
</script>

<style lang="scss">
  .home-download-load-more-button {
    width: 100%;
    border: 1px solid;
    color: #D32F2F;
    box-sizing: border-box;
    line-height: 48px;
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
    border-radius: 4px;
    margin-top: 24px;
    transition: background-color 300ms;
    cursor: pointer;
    background-color: transparent;

    &:hover {
      background-color: #D32F2F33;
    }
  }
</style>
