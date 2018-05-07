var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var term = new Schema({
  title: String,
  definition: String,
  exampleText: String,
  category: [String],
  notNato: Boolean,
  differsFromNato: Boolean,
});

module.exports = mongoose.model('Term', term);
