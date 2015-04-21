var express = require('express');
var app = express();
var fs = require('fs');
var http = require('http');
var server = http.createServer(app);

app.get('/', function (req, res) {
	fs.readFile('skin_by_bootstrap.html', function(error, data){
		if(error){
			conosole.log(error);
		}else{
			res.writeHead(200, { 'Content-Type' : 'text/html' });
			res.end(data);
		}
	});
});

app.get('/world.html', function (req, res) {
  res.send('Hello World');
});

server.listen(80, function() {
  console.log('Express server listening on port ' + server.address().port);
});
