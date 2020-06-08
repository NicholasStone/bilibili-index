const log4js = require('log4js')
const { resolve } = require('path')

const config = {
  appenders: {
    request: {
      type: 'dateFile',
      filename: resolve(__dirname, 'logs/proxy_request'),
      pattern: 'MM-dd.log',
      alwaysIncludePattern: true
    }
  },
  categories: {
    default: {
      appenders: ['request'],
      level: 'debug'
    },
    proxy_request: {
      appenders: ['request'],
      level: 'debug'
    }
  }
}

log4js.configure(config)
module.exports = log4js.getLogger('proxy_request')
