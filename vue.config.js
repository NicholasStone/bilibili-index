const path = require('path');
const server = require('./server')

module.exports = {
  chainWebpack: config => {
    config.module.rules.delete("svg"); //重点:删除默认配置中处理svg,
    //const svgRule = config.module.rule('svg')
    //svgRule.uses.clear()
    config.module
      .rule('svg-sprite-loader')
      .test(/\.svg$/)
      .include
      .add(path.resolve(__dirname, 'src/assets/images/icons')) //处理svg目录
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'bili-[name]'
      })
  },
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
    public: 'http://dev.nichospace.com:28001',
    disableHostCheck: true,
    // proxy: {
    //   '/apis': {
    //     target: 'https://i0.hdslb.com',
    //     pathRewrite: {'^/apis': ''},
    //     changeOrigin: true,
    //     agent: ''
    //   },
    // },
    before: server
  },
  configureWebpack: {
    resolve: {
      alias: {
        Assets: path.resolve(__dirname, 'src/assets'),
        Common: path.resolve(__dirname, 'src/common'),
        Components: path.resolve(__dirname, 'src/components'),
        Images: path.resolve(__dirname, 'src/assets/images'),
        Network: path.resolve(__dirname, 'src/service/network'),
        Utils: path.resolve(__dirname, 'src/service/utils'),
        Index: path.resolve(__dirname, 'src/pages/index')
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
