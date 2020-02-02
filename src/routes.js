const Home = () => import(/* webpackChunkName: "home" */ './views/Home.vue');
const PrivacyPolicy = () => import(/* webpackChunkName: "privacy-policy" */ './views/PrivacyPolicy.vue');
const FAQ = () => import(/* webpackChunkName: "faq" */ './views/FAQ.vue');

module.exports = [
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
    path: '/czesto-zadawane-pytania',
    name: 'czesto-zadawane-pytania',
    component: FAQ,
  },
  {
    path: '/czesto-zadawane-pytania/:question_id',
    component: FAQ,
  },
  // {
  //   path: '*.html',
  //   redirect: (to) => to.params.pathMatch,
  // },
  {
    path: '*',
    redirect: '/',
  },
];
