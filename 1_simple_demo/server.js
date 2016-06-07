var app = require('http').createServer(handler)
var io = require('socket.io')(app);
var fs = require('fs');

app.listen(8080);

function handler (request, response) {
    fs.readFile(__dirname + '/index.html',
        function (error, data) {
            if (error) {
                response.writeHead(500);
                response.end('Error loading index.html');
                return;
            } else {
                response.writeHead(200);
                response.end(data);
            }
        }
    );
}

io.on('connection', function (socket) {
    socket.on('echo', function (data) {
        socket.emit('echo', data);
    });
});
