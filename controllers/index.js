const express = require('express')
const router = express.Router()
const projectRoute = require('./project.route.js')

module.exports = function () {
  router.use('/', projectRoute)
  return router
}