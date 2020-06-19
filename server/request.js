const http = require('http')
const https = require('https')
const logger = require('./logger')

module.exports = function (url, options, payload = null) {
  return new Promise((resolve, reject) => {
    logger.info(`request [${options.method}] ${url.href} ${payload ? 'and with payload' + payload : 'without payload'}`)
    const client = url.protocol === 'http:' ? http : https
    const clientRequest = client.request(url, options, resolve)
    if (payload) clientRequest.write(payload)
    clientRequest.on('error', reject)
    clientRequest.end()
  })
}
