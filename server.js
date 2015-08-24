var config = require('./config/config');
var express = require(config.depPath + '/express/lib/express');
var http = require('http');
var app = express();

app.use(express.static(__dirname + config.indexPath));

var port = config.port;
http.createServer(app).listen(port, function() {
  console.log("server listening on port " + port);
});