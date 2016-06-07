var app = require('http').createServer()
var io = require('socket.io')(app);
var redis = require('socket.io-redis');

io.adapter(redis({ host: '127.0.0.1', port: 6379 }));

app.listen(8080);
