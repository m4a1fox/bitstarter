var fs = require('fs'),
    express = require('express'),
    app = express.createServer(express.logger()),
    port = process.env.PORT || 8080;


app.use(express.static(__dirname + '/public/'));

app.get('/', function(request, response) {
    var file = fs.readFile('public/index.html', function(err, data) {
        if (err) throw new Error('Error in loading file');
        response.send(data.toString('utf-8'));
    });

});



app.listen(port, function() {
    console.log("Listening on " + port);
});