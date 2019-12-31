<template>
  <div class="faq">
    <div class="header">
      <router-link to="/czesto-zadawane-pytania" v-if="window.width <= 850 && faqCurrent" class="header__back"><span class="mdi mdi-arrow-left"></span></router-link>
      <router-link to="/" class="header__wulkanowy"><img src="../assets/wulkanowy-small-flat.svg" alt="" /></router-link>
    </div>
    <div class="questions" v-if="window.width > 850 || !faqCurrent">
      <router-link
        class="questions__link"
        v-for="question in faqMap"
        :key="question.id"
        :to="`/czesto-zadawane-pytania/${question.id}`"
      >
        {{ question.name }}
      </router-link>
    </div>
    <div class="answer answer--no-question-selected" v-if="!faqCurrent && window.width > 850">
      <h1>Żadne pytanie nie jest wybrane</h1>
    </div>
    <div class="answer answer--question-selected" v-if="faqCurrent">
      <vue-markdown
        :source="faqCurrent"
        :linkify="false"
        :breaks="false"
      />
    </div>
  </div>
</template>

<script>
  import VueMarkdown from 'vue-markdown';
  import faqMap from '@/assets/faq-map.json';

  export default {
    name: 'faq-view',
    components: {
      VueMarkdown,
    },
    data: () => ({
      faqMap,
      faqAnswers: {},
      faqCurrent: null,
      window: {
        width: 0,
        height: 0,
      },
    }),
    created() {
      window.addEventListener('resize', this.handleWindowResize);
      this.handleWindowResize();
    },
    destroyed() {
      window.removeEventListener('resize', this.handleWindowResize);
    },
    methods: {
      importFaqAnswers(r) {
        r.keys().forEach((key) => { this.faqAnswers[key] = r(key); });
      },
      handleWindowResize() {
        this.window.width = window.innerWidth;
        this.window.height = window.innerHeight;
      },
    },
    mounted() {
      this.importFaqAnswers(require.context('@/assets/faq-answers', true, /\.md$/));

      this.$watch(
        '$route',
        (route) => {
          if (route.params.question_id) {
            if (!this.faqAnswers[`./${route.params.question_id}.md`]) {
              this.$router.push('/czesto-zadawane-pytania');
              this.faqCurrent = null;
              return;
            }

            this.faqCurrent = this.faqAnswers[`./${route.params.question_id}.md`].default;
          } else {
            this.faqCurrent = null;
          }
        },
        { immediate: true },
      );
    },
  };
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500');

  body {
    background:
      linear-gradient(
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6)
      ),
      url("../assets/wallpaper.jpg");
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
  }

  .faq {
    height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr;
    grid-template-columns: 1fr auto minmax(auto, 850px) 1fr;

    @media screen and (max-width: 850px) {
      grid-template-columns: 1fr;

      .header {
        grid-column: 1;
        margin: 4px;
      }

      .questions {
        margin-right: 16px;
        grid-column: 1;
        min-width: initial;
        max-width: unset;
        width: unset;

        .questions__link {
          background-color: #fff4;
          padding: 12px;

          &:hover {
            background-color: #fff8;
          }

          &:not(:last-of-type) {
            margin-bottom: 12px;
          }
        }
      }

      .answer {
        grid-column: 1;
      }
    }
  }

  .header {
    grid-row: 1;
    grid-column: 1/5;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    margin: 8px 0;

    &__back {
      grid-column: 1;
      grid-row: 1;
      justify-self: start;
      color: #fff;
      font-size: 32px;
      line-height: 32px;
      height: 32px;
      width: 32px;
      padding: 8px;
      margin: 8px;
    }

    &__wulkanowy {
      padding: 8px;
      height: 48px;
      grid-row: 1;
      grid-column: 2;

      img {
        height: 48px;
      }
    }
  }

  .questions {
    grid-row: 2;
    grid-column: 2;
    margin: 0 0 16px 16px;
    background-color: #fff8;
    padding: 8px;
    border-radius: 4px;
    overflow-y: auto;
    width: fit-content;
    min-width: 320px;
    max-width: 480px;
    box-shadow:
      0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14),
      0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }

  .questions__link {
    display: block;
    padding: 8px;
    font-size: 16px;
    text-decoration: none;
    color: #000;
    border-radius: 3px;
    transition: background-color 300ms;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;

    &:not(:last-of-type) {
      margin-bottom: 8px;
    }

    &:hover {
      background-color: #fff4;
    }

    &.router-link-active {
      background-color: #fff8;
      font-weight: 400;
    }
  }

  .answer {
    grid-row: 2;
    grid-column: 3;
    margin: 0 16px 16px;
    background-color: #fff8;
    border-radius: 4px;
    padding: 16px;
    overflow-y: auto;
    box-shadow:
      0 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14),
      0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    font-family: 'Roboto', sans-serif;

    &--question-selected {

      h1 {
        margin-top: 8px;
      }

      h1, h2, h3 {
        font-weight: normal;
      }

      p {
        text-align: justify;
        margin: 24px 0;
        line-height: 1.6;
      }

      img {
        max-height: 512px;
        border-radius: 4px;
        box-shadow:
          0 2px 4px -1px rgba(0, 0, 0, 0.2),
          0px 4px 5px 0px rgba(0, 0, 0, 0.14),
          0px 1px 10px 0px rgba(0, 0, 0, 0.12);
        margin: 12px auto 32px;
        display: block;
        max-width: 100%;
      }
    }

    &--no-question-selected {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      flex-direction: column;
      padding: 32px;

      h1 {
        margin: 0;
        font-weight: 300;
        font-size: 28px;
      }
    }
  }
</style>
