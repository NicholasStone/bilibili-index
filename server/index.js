const express = require('express')
const path = require('path')

module.exports = function (app) {
  app.use(express.static(path.resolve(__dirname, 'public')))
  app.get('/', (req, resp) => {
    resp.redirect('/index.html')
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
