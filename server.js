var express = require('express');
var http = require('http');

var app = express();

app.use(express.static(__dirname + '/public'));

var port = 80;
http.createServer(app).listen(port, function() {
  console.log("server listening on port " + port);
});