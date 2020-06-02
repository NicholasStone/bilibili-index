const express = require('express')
const path = require('path')
const proxy = require('./proxy')

module.exports = function (app) {
  app.use(express.static(path.resolve(__dirname, 'public')))

  app.get('/api/*', (req, resp) => {
    resp.set({
      'Access-Control-Allow-Origin': 'http://localhost',
      'Access-Control-Allow-Credentials': true
    })
    proxy(req, resp, 'http://api.bilibili.com/')
      .then(res => {
        resp.writeHead(res.statusCode, res.headers)
        res.on('data', chunk => {
          resp.write(chunk)
        })
        res.on('end', _ => {
          resp.end()
        })
      })
      .catch(err => {
        console.error(err)
      })
  })

  app.get('/cdn/*', (req, resp) => {
    proxy(req, resp, 'http://i0.hdslb.com/')
      .then(res => {
        resp.writeHead(res.statusCode, res.headers)
        res.on('data', chunk => {
          resp.write(chunk)
        })
        res.on('end', _ => {
          resp.end()
        })
      })
      .catch(err => {
        console.error(err)
      })
  })
  //
  // app.get('/', (req, resp) => {
  //   resp.redirect('/index.html')
  // })

  app.get('/BoxItems', (req, resp) => {
    resp.redirect('/BoxItems.json')
  })

  app.get('/CollectionBoxs', (req, resp) => {
    resp.redirect('/CollectionBoxs.json')
  })

  app.get('/Dynamics', (req, resp) => {
    resp.redirect('/Dynamics.json')
  })

  app.get('/History', (req, resp) => {
    resp.redirect('/History.json')
  })

  app.get('/UserData', (req, resp) => {
    resp.redirect('/UserData.json')
  })
}
