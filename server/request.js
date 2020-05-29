const http = require('http')

module.exports = function (url, options) {
  return new Promise((resolve, reject) => {
    const req = http.request(url, options, resolve)
    req.on('error', reject)
    req.end()
  })
}
