const httpRequest = require('./request')

module.exports = function (req, resp, base) {
  const reqUrl = req.params[0] || req.query.url || ''
  const url = new URL(reqUrl, base)
  url.protocol = 'http'
  url.search = new URLSearchParams(req.query).toString()
  return httpRequest(url, {})
}
