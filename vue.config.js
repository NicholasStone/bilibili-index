const path = require('path');
const server = require('./server')
require('dotenv').config()

const devServer = {
  host: 'localhost',
  port: process.env.DEV_SERVER_PORT,
  disableHostCheck: true,
  before: server,
  // proxy
}

if (process.env.DEV_ENV !== 'local'){
  devServer.host = '0.0.0.0'
  devServer.public = process.env.REMOTE_PUBLIC_HOST + ':' + process.env.PORT
}

module.exports = {
  chainWebpack: config => {
    config.module.rules.delete("svg"); //重点:删除默认配置中处理svg,
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
    }
  },
  devServer,
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
        path.resolve(__dirname, './src/assets/css/_variable.less'),
        path.resolve(__dirname, './src/assets/css/_mixins.less'),
        path.resolve(__dirname, './src/assets/css/_common.less'),
      ],
    },
  },
  lintOnSave: process.env.NODE_ENV !== 'production',
}
