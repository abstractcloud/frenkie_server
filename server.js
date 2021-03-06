var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use('/dist', express.static('dist'));
app.use('/resources', express.static('resources'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
    console.log('Frenkie connected');

    socket.on('disconnect', function () {
        console.log('Frenkie disconnected');
    });

    socket.on('control', function (control) {
        console.log('control: ' + control.go);
        io.emit("drive", control.drive);
    });
    
    socket.on('command', function (command) {
        console.log('command: ' + command.command);
        io.emit("commandcontrol", command.command);
    });
    
    socket.on('statuslog', function (status) {
        console.log('status: ' + status);
        io.emit('logs', status);
    });
});

http.listen(3000, function () {
    console.log('listening on *:3000');
});