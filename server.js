var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')

var model = require('./models/iot.js')

var model2 = require('./models/member.js')

mongoose.connect('mongodb://localhost/iot')

var app = express()


app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(express.static('public'))

app.post('/',function  (req,res){
    var obj = new model(req.body)
    obj.save(function (err, obj) {
      if (err) {
        res.status(500).send(err)
      } else {
        res.send(obj)
      }
    })
})

app.post('/api/iot',function (req,res){
    var obj = new model(req.body)
    obj.save(function (err, obj) {
      if (err) {
        res.status(500).send(err)
      } else {
        res.send(obj)
      }
    })
})

app.post('/api/member',function (req,res){
    var obj = new model2(req.body)
    obj.save(function (err, obj) {
      if (err) {
        res.status(500).send(err)
      } else {
        res.send(obj)
      }
    })
})






app.use('/api', require('./routes/api'))


app.listen(3000)
console.log('run in 3000')
