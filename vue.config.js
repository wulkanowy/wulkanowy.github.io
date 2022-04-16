const PrerenderSPAPlugin = require('prerender-spa-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const routes = require('./src/routes');
const faqMap = require('./src/assets/faq-map.json');

const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;

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
  configureWebpack: {
    plugins: [
      // new HtmlWebpackPlugin({
        // template: 'public/index.html',
        // filename: path.resolve(__dirname, 'dist/index.html'),
        // favicon: 'public/favicon.ico',
      // }),
      // new PrerenderSPAPlugin({
      //   staticDir: path.join(__dirname, 'dist'),
      //   routes: [
      //     '/polityka-prywatnosci',
      //     '/czesto-zadawane-pytania',
      //     ...faqMap.map((item) => `/czesto-zadawane-pytania/${item.id}`),
      //   ],
      //   renderer: new Renderer({
      //     headless: true,
      //     renderAfterDocumentEvent: 'x-app-rendered',
      //   }),
      // }),
    ],
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
