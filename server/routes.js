'use strict';

var express = require('express');
var router = express.Router();
var _ = require('lodash');
<<<<<<< HEAD

router.get('/*', function indexRouteHandler (req, res) {
  res.render('view', {
  	title: "Website Example",
=======
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
  var todos = req.body.todos;
  fs.writeFile(databasePath, todos, function(err){
    if (err) { console.log(err); }
  // respond to the client
  res.writeHead(200, {'Content-Type': 'text/json'});
  res.write(todos);
  res.end();
  }); 
});

router.get('/*', function indexRouteHandler (req, res) {
  res.render('view', {
    title: "Website Example",
>>>>>>> a53a3615da7ab047a805b9d1763687263ffb55a1
    token: _.uniqueId()
  });
});

<<<<<<< HEAD
// TODO: API routes

=======
>>>>>>> a53a3615da7ab047a805b9d1763687263ffb55a1
module.exports = router;