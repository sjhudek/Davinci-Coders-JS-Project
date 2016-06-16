'use strict';

var express = require('express');
var router = express.Router();
var _ = require('lodash');
var fs = require('fs');

// API routes
var databasePath = __dirname + '/database.json';
router.get('/api', function(req, res){
  // read in the databse
  fs.readFile(databasePath, function(err, data){
    if (err) { console.log(error); }
    // send a response
    res.writeHead(200, {'Content-Type': 'text/json'});
    res.write(data);
    res.end();
  });
});

router.post('/api', function(req, res){
  var newTodo = req.body;
  fs.readFile(databasePath, function(err, data){
    if (err) { console.log(err); }
    // parse data from a string
    var parsedData = JSON.parse(data);
    if (!parsedData) { console.log('Database is corrupted!'); }
    // add new item to the database
    parsedData.push(newTodo);
    // convert database back into a string
    var newDBString = JSON.stringify(parsedData);
    fs.writeFile(databasePath, newDBString, function(err){
      if (err) { console.log(err); }
    // respond to the client
    res.writeHead(200, {'Content-Type': 'text/json'});
    res.write(newDBString);
    res.end();
    });
  }); 
});



router.get('/*', function indexRouteHandler (req, res) {
  res.render('view', {
    title: "Website Example",
    token: _.uniqueId()
  });
});



module.exports = router;