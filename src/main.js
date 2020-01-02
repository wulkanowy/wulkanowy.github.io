import '@mdi/font/css/materialdesignicons.min.css';
import Vue from 'vue';
import AsyncComputed from 'vue-async-computed';
import VueResource from 'vue-resource';
import VueMq from 'vue-mq';
import VueAnalytics from 'vue-analytics';

import App from './App.vue';
import router from './router';

Vue.use(AsyncComputed);
Vue.use(VueResource);
Vue.use(VueMq, {
  breakpoints: {
    md: 875,
    lg: Infinity,
  },
});
Vue.use(VueAnalytics, {
  id: 'UA-99646499-3',
  debug: {
    enabled: window.location.hostname === 'localhost',
    sendHitTask: window.location.hostname !== 'localhost',
  },
});
Vue.$ga.page(window.location.pathname);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
  created() {
    if (sessionStorage.redirect) {
      const { redirect } = sessionStorage;
      delete sessionStorage.redirect;
      router.push(redirect);
    }
  },
  mounted() {
    document.dispatchEvent(new Event('render-event'));
  },
}).$mount('#app');
