import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes';

Vue.use(Router);

export default new Router({
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) return { selector: to.hash };
    if (savedPosition) return savedPosition;
    return null;
  },
  routes,
});
