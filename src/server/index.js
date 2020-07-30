var express = require('express');
var socket = require('socket.io');

// App setup
var app = express();
var server = app.listen(4000, function(){
    console.log('listening for requests on port 4000,');
});


// Socket setup & pass server
var io = socket(server);

var lastTen = [];


io.on('connection', socket => {

    console.log('made socket connection', socket.id);

io.emit('calculation', {lastTen})


  socket.on('calculation', ({ results }) => {

   if (results.length <= 10) {
    lastTen = results;
  }  else {
    lastTen = results.slice(0).slice(-10);
  }
    io.emit('calculation', {lastTen})
  })

});
