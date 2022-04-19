import { createApp } from 'vue';
// import VueResource from 'vue-resource';
import { Vue3Mq } from 'vue3-mq';
// import VueAnalytics from 'vue-analytics';

import App from './App.vue';
import router from './router';

// Vue.$ga.page(window.location.pathname);

createApp(App)
  .use(router)
  // .use(VueAnalytics, {
  //   id: 'UA-99646499-3',
  //   debug: {
  //     enabled: window.location.hostname === 'localhost',
  //     sendHitTask: window.location.hostname !== 'localhost',
  //   },
  // })
  .use(Vue3Mq, {
    breakpoints: {
      xs: 0,
      md: 875,
      lg: Infinity,
    },
  })
  // .use(VueResource) // todo
  // .mounted(() => {
  //   document.dispatchEvent(new Event('x-app-rendered'));
  // })
  .mount('#app');
