var express = require('express')
var router = express.Router()

var iot = require('../models/iot')

iot.methods(['get', 'put', 'post', 'delete'])
iot.register(router, '/iot')

var member = require('../models/member')

member.methods(['get', 'put', 'post', 'delete'])
member.register(router, '/member')

module.exports = router
