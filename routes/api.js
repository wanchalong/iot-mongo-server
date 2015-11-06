var express = require('express')
var router = express.Router()

var iot = require('../models/iot')

iot.methods(['get', 'put', 'post', 'delete'])
iot.register(router, '/api/iot')
iot.register(router, '/')

var member = require('../models/member')

member.methods(['get', 'put', 'post', 'delete'])
member.register(router, '/api/member')

module.exports = router




router.post('/login',function(req,res){
      console.log(req.body.username + " " +req.body.password);
       
       Model.find({ username : req.body.username , password : req.body.password }).exec(function (err, results) {
       if (err) {
         res.status(500).send(err)
       } else {
         res.send(results)
         console.log(results)
       }
     })
      
  })

var Model = require('../models/member')
