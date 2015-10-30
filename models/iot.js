var restful = require('node-restful')
var mongoose = restful.mongoose

var iot = new mongoose.Schema({
  name: String,
  grade: String

})

module.exports = restful.model('iot', iot)
