<template>
  <div class="home-main-header">
    <h1 class="logo"><img src="../assets/wulkanowy-full-flat.svg" alt="Wulkanowy" /></h1>
    <p class="text">
      Aplikacja ucznia i rodzica<br />
      Dla dziennika UONET+
    </p>
    <div class="buttons">
      <a
        class="store-link"
        href="https://play.google.com/store/apps/details?id=io.github.wulkanowy&utm_source=homepage"
        @click="storeClick">
        <img src="../assets/google-play-badge.svg" alt="Pobierz z Google Play" />
      </a>
      <a
        class="store-link"
        href="https://appgallery.huawei.com/#/app/C101440411"
        @click="storeClick">
        <img src="../assets/appgallery-badge.png" alt="Odkrywaj w AppGallery" />
      </a>
      <a
        class="store-link"
        href="https://f-droid.org/packages/io.github.wulkanowy"
        @click="storeClick">
        <img src="../assets/f-droid-badge.png" alt="Get it on F-Droid">
      </a>
    </div>
    <div class ="buttons">
      <button class="other-options" @click="otherOptionsClick">
        INNE OPCJE
      </button>
    </div>
    <div class="quick-links">
      <a class="discord" title="Discord" href="https://discord.gg/vccAQBr" @click="discordClick">
        <img src="../assets/discord.svg" alt="Discord" />
      </a>
      <a class="github" title="GitHub" href="https://github.com/wulkanowy/" @click="githubClick">
        <img src="../assets/github.svg" alt="GitHub" />
      </a>
      <a class="paypal" title="PayPal" href="https://paypal.me/wulkanowy" @click="paypalClick">
        <img src="../assets/paypal.svg" alt="PayPal" />
      </a>
      <a class="facebook" title="Facebook" href="https://www.facebook.com/wulkanowy" @click="facebookClick">
        <img src="../assets/facebook.png" alt="Facebook" />
      </a>
            <a class="reddit" title="Reddit" href="https://www.reddit.com/r/wulkanowy/" @click="redditClick">
        <img src="../assets/reddit.svg" alt="Reddit" />
      </a>
    </div>
    <div class="footer">
      <router-link class="footer__link footer__privacy-policy-link" to="polityka-prywatnosci">Polityka prywatności</router-link>
      <router-link class="footer__link footer__faq-link" to="czesto-zadawane-pytania">Często zadawane pytania</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home-main-header',
    methods: {
      storeClick() {
        this.$ga.event({
          eventCategory: 'google-play-link',
          eventAction: 'click',
        });
      },
      otherOptionsClick() {
        this.$ga.event({
          eventCategory: 'other-download-options-link',
          eventAction: 'click',
        });

        const element = document.querySelector('.download');
        if (element.scrollIntoView) {
          element.scrollIntoView({
            behavior: 'smooth',
          });
          element.focus();
        }
      },
      facebookClick() {
        this.$ga.event({
          eventCategory: 'facebook-link',
          eventAction: 'click',
        });
      },
      discordClick() {
        this.$ga.event({
          eventCategory: 'discord-link',
          eventAction: 'click',
        });
      },
      githubClick() {
        this.$ga.event({
          eventCategory: 'github-link',
          eventAction: 'click',
        });
      },
      paypalClick() {
        this.$ga.event({
          eventCategory: 'paypal-link',
          eventAction: 'click',
        });
      },
      redditClick() {
        this.$ga.event({
          eventCategory: 'reddit-link',
          eventAction: 'click',
        });
      },
    },
  };
</script>

<style lang="scss" scoped>
  .home-main-header {
    padding-bottom: 48px;
    height: 100vh;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Roboto', sans-serif;
  }

  .logo {
    margin: 0;

    img {
      width: 768px;
      max-width: 90vw;
      display: block;
      filter:
        drop-shadow(0 5px 5px rgba(0, 0, 0, 0.2))
        drop-shadow(0 8px 10px rgba(0, 0, 0, 0.14))
        drop-shadow(0 3px 14px rgba(0, 0, 0, 0.12));
    }
  }

  .text {
    text-align: center;
    margin-top: 0;
    margin-bottom: 48px;
    font-weight: 300;
    color: #fff;
    font-size: 32px;
    text-shadow: 0 5px 5px rgba(0, 0, 0, 0.2),
    0 8px 10px rgba(0, 0, 0, 0.14),
    0 3px 14px rgba(0, 0, 0, 0.12);
    text-transform: uppercase;

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

    .store-link {
      display: block;
      margin: 5px;

      img {
        width: 216px;
        height: 64px;
        box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
        0 4px 5px 0 rgba(0, 0, 0, 0.14),
        0 1px 10px 0 rgba(0, 0, 0, 0.12);
        border-radius: 8px;
        transition: box-shadow 150ms;
      }

      &:focus {
        outline: none;
      }

      &:hover img, &:focus img {
        box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2),
        0 24px 38px 3px rgba(0, 0, 0, 0.14),
        0 9px 46px 8px rgba(0, 0, 0, 0.12);
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
      box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
      0 4px 5px 0 rgba(0, 0, 0, 0.14),
      0 1px 10px 0 rgba(0, 0, 0, 0.12);
      border: none;
      cursor: pointer;
      transition: box-shadow 150ms;

      &:focus {
        outline: none;
      }

      &:focus, &:hover {
        box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2),
        0 24px 38px 3px rgba(0, 0, 0, 0.14),
        0 9px 46px 8px rgba(0, 0, 0, 0.12);
      }

      @media screen and (max-width: 550px) {
        margin-left: 0;
        margin-top: 8px;
      }
    }
  }

  .quick-links {
    margin-top: 32px;

    .github, .discord, .paypal, .facebook, .reddit {
      margin: 8px;

      img {
        width: 48px;
        height: 48px;
        filter: drop-shadow(0 5px 5px rgba(0, 0, 0, .2)) drop-shadow(0 8px 10px rgba(0, 0, 0, .14)) drop-shadow(0 3px 14px rgba(0, 0, 0, .12));

        @media screen and (max-width: 375px) {
          width: 32px;
          height: 32px;
        }
      }
    }
  }

  .footer {
    margin-top: 32px;

    &__link {
      color: #fff;
      display: block;
      padding: 2px;
      text-align: center;
      font-size: 18px;
    }

    &__privacy-policy-link {
      margin-bottom: 8px;
    }
  }
</style>
