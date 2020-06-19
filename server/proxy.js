const httpRequest = require('./request')

module.exports = function (req, resp, base) {
  const reqUrl = req.params[0] || req.query.url || ''
  const url = new URL(reqUrl, base)
  url.search = new URLSearchParams(req.query).toString()

  const { method, body } = req
  const payload = JSON.stringify(body)
  const headers = {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(payload)
  }
  const options = {
    method
  }

  if (method === 'POST') options.headers = headers

  return httpRequest(url, options, payload)
}
