var config = require('./config/config');
var express = require(config.depPath + '/express/lib/express');
var http = require('http');
var app = express();

app.use(express.static(__dirname + config.indexPath));

var port = config.port;
http.createServer(app).listen(port, function() {
  console.log("server listening on port " + port);
});

var url = "https://api.sendgrid.com/api/mail.send.json";
var auth = "Bearer SG.klg_Q_mvQvmSL1AQOOSdlQ.7RhZmwlDlnboM4OdGsyFNX2-w4rOG_natnow5aNtQms";

app.post('/api/email', function(req, res) {
  console.log(req + " error?");
  res.send(req);
});