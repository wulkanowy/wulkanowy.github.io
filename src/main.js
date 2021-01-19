import Vue from 'vue';
import VueResource from 'vue-resource';
import VueMq from 'vue-mq';
import VueAnalytics from 'vue-analytics';

import App from './App.vue';
import router from './router';

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
  mounted() {
    document.dispatchEvent(new Event('x-app-rendered'));
  },
}).$mount('#app');
