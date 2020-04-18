const routes = require('./src/routes');
const faqMap = require('./src/assets/faq-map.json');

module.exports = {
  publicPath: '/',
  pluginOptions: {
    sitemap: {
      baseURL: 'https://wulkanowy.github.io',
      outputDir: 'dist/',
      pretty: true,
      routes,
    },
    prerenderSpa: {
      renderRoutes: [
        '/',
        '/polityka-prywatnosci/',
        '/czesto-zadawane-pytania/',
        ...faqMap.map((item) => `/czesto-zadawane-pytania/${item.id}/`),
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true,
    },
  },
  chainWebpack: (config) => {
    config.module
      .rule('md')
      .test(/\.md$/)
      .use('raw-loader')
      .loader('raw-loader')
      .end();
  },
};
