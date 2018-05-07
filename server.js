var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-Parser');
var db = mongoose.connect('mongodb://heroku_qjqm3dmt:4rb535kpbhkk6vc9ri60n3gahg@ds217310.mlab.com:17310/heroku_qjqm3dmt');

var Term = require('./model/term');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.listen(3000, function() {
  console.log("Brevity Api data is available");
})

app.post('/term', function(req,res) {
  var term = new Term(req.body);
  term.save(function(err, savedTerm) {
    if (err) {
      res.status(500).send({error:"failed to save term"});
    } else {
      res.send(savedTerm);
    }
  });
});

app.get('/term', function(req,res){
  Term.find({}, function(err, terms) {
    if (err) {
      res.status(500).send({error:"unable to access data"});
    } else {
      res.send(terms);
    }
  });
});
