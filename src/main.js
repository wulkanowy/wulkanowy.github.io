import '@mdi/font/css/materialdesignicons.min.css';
import Vue from 'vue';
import AsyncComputed from 'vue-async-computed';
import VueResource from 'vue-resource';

import App from './App.vue';

Vue.use(AsyncComputed);
Vue.use(VueResource);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
