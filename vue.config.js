const routes = require('./src/routes');

module.exports = {
  publicPath: '/',
  pluginOptions: {
    sitemap: {
      baseURL: 'https://wulkanowy.github.io',
      outputDir: 'dist/',
      pretty: true,
      routes,
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
