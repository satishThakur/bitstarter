var express = require('express');
var fs  = require('fs');

var app = express.createServer(express.logger());
app.use(express.static(__dirname + '/bootstrap'));

app.get('/', function(request, response) {
    var content = fs.readFileSync('./index.html');
    console.log('Content Type: ' + typeof content);
    response.send(content.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
});