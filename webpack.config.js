const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PrerenderSPAPlugin = require('prerender-spa-plugin');

const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: 'build.js',
  },
  module: {
    rules: [
      {
        test: /\.md$/,
        use: [
          {
            loader: 'raw-loader',
          },
          {
            loader: 'markdown-loader',
          },
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|gif|svg|eot|woff|woff2|ttf)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]',
        },
      },
      {
        test: /\.s?css$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js',
    },
  },
  devServer: {
    historyApiFallback: true,
    noInfo: false,
  },
  devtool: '#eval-source-map',
  plugins: [
    new VueLoaderPlugin(),
  ],
};

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map';
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      },
    }),
    new HtmlWebpackPlugin({
      title: 'PRODUCTION prerender-spa-plugin',
      template: 'public/index.html',
      filename: path.resolve(__dirname, 'dist/index.html'),
      favicon: 'public/favicon.ico',
    }),
    new PrerenderSPAPlugin({
      staticDir: path.join(__dirname, 'dist'),
      routes: [
        '/polityka-prywatnosci',
        '/czesto-zadawane-pytania',
        '/czesto-zadawane-pytania/czym-jest-wulkanowy',
        '/czesto-zadawane-pytania/dlaczego-nie-moge-sie-zalogowac',
        '/czesto-zadawane-pytania/co-jesli-nie-pamietam-hasla',
        '/czesto-zadawane-pytania/co-to-jest-symbol',
        '/czesto-zadawane-pytania/jaki-wybrac-dziennik',
        '/czesto-zadawane-pytania/czym-roznia-sie-wersje-beta-i-dev',
      ],

      renderer: new Renderer({
        inject: {
          foo: 'bar',
        },
        headless: false,
        renderAfterDocumentEvent: 'render-event',
      }),
    }),
  ]);
} else {
  // NODE_ENV === 'development'
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"',
      },
    }),
    new HtmlWebpackPlugin({
      title: 'DEVELOPMENT prerender-spa-plugin',
      template: 'public/index.html',
      filename: 'index.html',
      favicon: 'public/favicon.ico',
    }),
  ]);
}
