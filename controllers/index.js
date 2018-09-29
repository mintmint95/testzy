const express = require('express')
const router = express.Router()
const projectRoute = require('./project.route.js')
const helloRoute = require('./helloworld.route.js')

module.exports = function () {
  router.use('/', projectRoute)
  router.use('/', helloRoute)
  return router
}