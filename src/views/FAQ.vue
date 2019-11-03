<template>
  <div class="faq">
    <div class="header">
      <router-link to="/czesto-zadawane-pytania" v-if="window.width <= 850 && faqCurrent" class="header__back"><span class="mdi mdi-arrow-left"></span></router-link>
      <router-link to="/" class="header__wulkanowy"><img src="../assets/wulkanowy-small-flat.svg" /></router-link>
    </div>
    <div class="questions" v-if="window.width > 850 || !faqCurrent">
      <router-link
        v-for="question in faqMap"
        :key="question.id"
        :to="`/czesto-zadawane-pytania/${question.id}`"
      >
        {{ question.name }}
      </router-link>
    </div>
    <div class="answer answer--no-question-selected" v-if="!faqCurrent && window.width > 850">
      <h1>Brak wybranego pytania</h1>
    </div>
    <div class="answer answer--question-selected" v-if="faqCurrent">
      <vue-markdown :source="faqCurrent" />
    </div>
  </div>
</template>

<script>
  import faqMap from '@/assets/faq-map.json';
  import VueMarkdown from 'vue-markdown';

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
    grid-template-columns: auto 1fr;

    @media screen and (max-width: 850px) {
      grid-template-columns: 1fr;

      .header {
        grid-column: 1;
        margin: 4px;
      }

      .questions {
        margin-right: 16px;
      }

      .answer {
        grid-column: 1;
      }
    }
  }

  .header {
    grid-row: 1;
    grid-column: 1/3;
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
    grid-column: 1;
    margin: 16px;
    margin-top: 0;
    margin-right: 0;
    background-color: #fff8;
    padding: 8px;
    border-radius: 4px;
    overflow-y: auto;
    box-shadow:
      0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14),
      0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }

  .answer {
    grid-row: 2;
    grid-column: 2;
    margin: 16px;
    margin-top: 0;
    background-color: #fff8;
    border-radius: 4px;
    padding: 16px;
    overflow-y: auto;
    box-shadow:
      0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14),
      0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }
</style>
