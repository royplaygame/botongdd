var path = require('path');
var http = require('http');
var express = require('express');
var proxy = require('express-http-proxy');
//使用proxyTable
var proxyMiddleware = require('http-proxy-middleware');

var app = express();


app.use(express.static(path.join(__dirname, '/dist/')));


var server = http.createServer(app);


app.listen(8000, function () {
    console.log('success')
});
