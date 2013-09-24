var express = require('express');
var fs      = require('fs');


var getTextFromFile = function(filename){
    return fs.readFileSync(filename).toString();
};

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var source_file = "index.html";
  response.send(getTextFromFile(source_file));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
