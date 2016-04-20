var server = require('http').createServer();
var io = require('socket.io')(server);
var _ = require('lodash');

io.on('connection', function(socket) {

    console.log('a user connected');

    socket.on('disconnect', function() {
        console.log('user disconnected');
    });

    socket.on('message', function(msg) {
        socket.broadcast.emit('message', msg);
    });

})

server.listen(3000);
