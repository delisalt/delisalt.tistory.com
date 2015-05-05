var http = require("http");
var fs = require ("fs");
var express = require('express');
var app = express();
var ext = /[\w\d_-]+\.[\w\d]+$/;
var path = require('path');

app.get('/', function(req, res) {
    fs.readFile(__dirname + '/index.html', 'utf8', function(err, text){
        res.send(text);
    });
});

http.createServer(function(req, res) {
   var file = __dirname + req.url;
   if(req.url === '/') {
       // serve index.html on root 
       file = __dirname + '/index.html'
   }
   // serve all other files echoed by index.html e.g. style.css
   // callback is optional
   fileServer(file, req, res);
   console.log("server listen start!");
}).listen(80);

console.log("server.js");
  
var fileServer = function(file, req, res) {
//module.exports = function(file, req, res, callback) {
    var fs = require('fs')
        , ext = require('path').extname(file)
        , type = ''
        , fileExtensions = {
            '.html':'text/html',
            '.css':'text/css',
            '.js':'text/javascript',
            '.json':'application/json',
            '.png':'image/png',
            '.jpg':'image/jpg',
            '.wav':'audio/wav',
			'.svg':'image/svg+xml'
        }
    console.log('req    '+req.url)
    for(var i in fileExtensions) {
       if(ext === i) {    
			type = fileExtensions[i]
			break
       }
    }
    fs.exists(file, function(exists) {
       if(exists) {
          res.writeHead(200, { 'Content-Type': type })
          fs.createReadStream(file).pipe(res)
          console.log('served  '+req.url)
//          if(callback !== undefined) callback()
       }else{
			res.writeHead(404, {"Content-Type": "text/plain"});
			res.write("404 Not Found\n");
			res.end();
			console.log(file,'file dne')
		}
	})
}