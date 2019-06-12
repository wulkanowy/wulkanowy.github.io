import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import PrivacyPolicy from './views/PrivacyPolicy.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/polityka-prywatnosci',
      name: 'polityka-prywatnosci',
      component: PrivacyPolicy,
    },
    {
      path: '*.html',
      redirect: to => to.params.pathMatch,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
