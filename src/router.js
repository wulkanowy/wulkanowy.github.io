import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';

export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) return { selector: to.hash };
    if (savedPosition) return savedPosition;
    return null;
  },
});
