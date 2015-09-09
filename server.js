var config = require('./config/config');
var express = require(config.depPath + '/express/lib/express');
var bodyParser = require('body-parser');
var http = require('http');
var request = require('request');
var app = express();

app.use(express.static(__dirname + config.indexPath));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

var url = "https://api.sendgrid.com/api/mail.send.json";
var auth = "Bearer SG.klg_Q_mvQvmSL1AQOOSdlQ.7RhZmwlDlnboM4OdGsyFNX2-w4rOG_natnow5aNtQms";

app.post('/api/email', function(req, res) { // send an email
  console.log(req.body);

  var emailBody = "Inquiry from parksvillekayaking.ca." + "\n" +
      "Name: " + req.body.name + "\n" +
      "Email: " + req.body.email + "\n" +
      "Date: " + req.body.date + "\n" +
      "Time: " + req.body.time + "\n" +
      "Message: " + req.body.message;

  request.post(
    'https://api.sendgrid.com/api/mail.send.json',
    {
      form: {
        to: 'dorsay@live.ca',
        from: 'info@parksvillekayaking.ca',
        subject: 'Parksville Kayaking inquiry - ' + req.body.name,
        html: emailBody
      },
      headers: {
        Authorization: auth,
        'Content-Type': 'application/json'
      }
    },
    function (error, response, body) {
      console.log(body);
      res.send("Message sent");
    }
  );
});

var port = config.port;
http.createServer(app).listen(port, function() {
  console.log("server listening on port " + port);
});