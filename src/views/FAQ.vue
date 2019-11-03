<template>
  <div class="faq">
    <div class="questions-list">
      <router-link
        v-for="question in faqMap"
        :key="question.id"
        :to="`/czesto-zadawane-pytania/${question.id}`"
      >
        {{ question.name }}
      </router-link>
    </div>
    <div class="answer answer--no-question-selected" v-if="!faqCurrent">
      <h1>Brak wybranego pytania</h1>
    </div>
    <div class="answer answer--question-selected" v-else>
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
    }),
    methods: {
      importFaqAnswers(r) {
        r.keys().forEach((key) => { this.faqAnswers[key] = r(key); });
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
          }
        },
        { immediate: true },
      );
    },
  };
</script>
