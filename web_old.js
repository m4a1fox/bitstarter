var express = require('express');
var fs = require('fs');


var app = express();
app.use('/static', express.static(__dirname + '/public/img/link_box_meaning.png'));

var text = fs.readFileSync('index.html');
app.get('/', function(request, response) {
    var buffer = new Buffer(text, 'utf-8');
    response.send(buffer.toString('utf8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
