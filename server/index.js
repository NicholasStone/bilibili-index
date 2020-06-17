const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const proxy = require('./proxy')
require('dotenv').config()

module.exports = function (app) {
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: false }))
  // app.use(bodyParser.raw())
  // app.use(bodyParser.text())
  app.use(express.static(path.resolve(__dirname, 'public')))
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    next()
  })

  app.all('/api/*', (req, resp) => {
    proxy(req, resp, 'http://api.bilibili.com/')
      .then(res => {
        resp.writeHead(res.statusCode, res.headers)
        res.on('data', chunk => resp.write(chunk))
        res.on('end', () => resp.end())
      })
      .catch(err => console.error(err))
  })
  app.all('/cdn/*', (req, resp) => {
    proxy(req, resp, 'http://i0.hdslb.com/')
      .then(res => {
        resp.writeHead(res.statusCode, res.headers)
        res.on('data', chunk => resp.write(chunk))
        res.on('end', () => resp.end())
      })
      .catch(err => console.error(err))
  })

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
