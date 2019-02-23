<template>
  <div id="main-header">
    <img class="logo" src="../assets/wulkanowy-full-flat.svg" alt="Wulkanowy" />
    <h3 class="text">
      APLIKACJA UCZNIA I RODZICA<br />
      DLA DZIENNIKA UONET+
    </h3>
    <div class="buttons">
      <a
        class="google-play-link"
        href="https://play.google.com/store/apps/details?id=io.github.wulkanowy&utm_source=homepage"
        target="_blank">
        <img src="../assets/google-play-badge.svg" alt="Pobierz z Google Play" />
      </a>
      <a class="other-options" href="#download">
        INNE OPCJE
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home-main-header',
};
</script>


<style lang="scss" scoped>
  #main-header {
    padding-bottom: 48px;
    height: 100vh;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .logo {
    width: 768px;
    max-width: 90vw;
    display: block;
    filter:
      drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.2))
      drop-shadow(0px 8px 10px rgba(0, 0, 0, 0.14))
      drop-shadow(0px 3px 14px rgba(0, 0, 0, 0.12))
  }

  .text {
    text-align: center;
    margin-top: 0;
    margin-bottom: 48px;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    color: #fff;
    font-size: 32px;
    text-shadow:
      0px 5px 5px rgba(0, 0, 0, 0.2),
      0px 8px 10px rgba(0, 0, 0, 0.14),
      0px 3px 14px rgba(0, 0, 0, 0.12);

    @media screen and (max-width: 550px) {
      font-size: 24px;
    }

    @media screen and (max-width: 375px) {
      font-size: 16px;
    }
  }

  .buttons {
    width: fit-content;
    display: flex;
    flex-direction: row;

    @media screen and (max-width: 550px) {
      flex-direction: column;
    }

    .google-play-link {
      display: block;

      img {
        widows: 216px;
        height: 64px;
        box-shadow:
          0px 2px 4px -1px rgba(0, 0, 0, 0.2),
          0px 4px 5px 0px rgba(0, 0, 0, 0.14),
          0px 1px 10px 0px rgba(0, 0, 0, 0.12);
          border-radius: 8px;
      }
    }

    .other-options {
      display: block;
      width: 216px;
      height: 64px;
      box-sizing: border-box;
      background-color: #fff;
      text-align: center;
      text-decoration: none;
      color: rgba(0, 0, 0, 0.87);
      line-height: 64px;
      font-size: 20px;
      font-family: 'Roboto', sans-serif;
      font-weight: 500;
      border-radius: 4px;
      margin-left: 32px;
      box-shadow:
        0px 2px 4px -1px rgba(0, 0, 0, 0.2),
        0px 4px 5px 0px rgba(0, 0, 0, 0.14),
        0px 1px 10px 0px rgba(0, 0, 0, 0.12);

      @media screen and (max-width: 550px) {
        margin-left: 0;
        margin-top: 8px;
      }
    }
  }
</style>
