console.log(process.env.NODE_ENV);

var express = require("express");
var http = require('http');
var socket_io = require('socket.io');

var config = require("./config").get();

var app = express()
  , server = http.createServer(app)
  , io = socket_io.listen(server);

server.listen(config.port);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

var client_counter = 0;

io.sockets.on('connection', function (socket) {
  client_counter++;  

  socket.broadcast.emit('new_connection', { clients: client_counter });
  socket.on('transmit_data', function (data) {
    console.log(data);
  });

});
