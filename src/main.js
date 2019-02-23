import '@mdi/font/css/materialdesignicons.min.css';
import Vue from 'vue';
import AsyncComputed from 'vue-async-computed';
import VueResource from 'vue-resource';
import VueMq from 'vue-mq';

import App from './App.vue';

Vue.use(AsyncComputed);
Vue.use(VueResource);
Vue.use(VueMq, {
  breakpoints: {
    md: 875,
    lg: Infinity,
  },
});

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
