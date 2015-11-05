var restful = require('node-restful')
var mongoose = restful.mongoose

var member = new mongoose.Schema({
  name: String,
  surname: String,
  email: String,
  username: String,
  password: String

})

module.exports = restful.model('member', member)
