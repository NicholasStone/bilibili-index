const path = require('path');

module.exports = {
  pages: {
    index: {
      entry: 'src/pages/index/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      chunk: ['chunk-vendors', 'chunk-common', 'index'],
    },
    timeline: {
      entry: 'src/pages/timeline/main.js',
      template: 'public/index.html',
      filename: 'timeline.html',
      chunk: ['chunk-vendors', 'chunk-common', 'index'],
    },
    history: {
      entry: 'src/pages/history/main.js',
      template: 'public/index.html',
      filename: 'timeline.html',
      chunk: ['chunk-vendors', 'chunk-common', 'index'],
    },
  },
  devServer: {
    host: '0.0.0.0',
    port: '28001',
    public: 'cloud.nichospace.com:28001',
    before: (app) => {
      app.get('/', (request, response) => {
        response.write(`
<a href='/index'> /index </a> <br>
<a href='/history'> /history </a> <br>
<a href='/timeline'> /timelint </a>
        `);
      });
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        Assets: path.resolve(__dirname, 'src/assets'),
        Common: path.resolve(__dirname, 'src/common'),
        Components: path.resolve(__dirname, 'src/components'),
        Network: path.resolve(__dirname, 'src/network'),
        Images: path.resolve(__dirname, 'src/assets/images'),
      },
    },
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, './src/assets/css/_main.less'),
      ],
    },
  },
  lintOnSave: process.env.NODE_ENV !== 'production',
}
