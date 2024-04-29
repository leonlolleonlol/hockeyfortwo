const express = require('express')
const app = express()
const port=3000
const server=app.listen(port)
const io = require('socket.io')(server, { cors: { origin: '*' } }) // Enable CORS for all origins (not recommended for production)

app.get('/', (req, res) => {
    res.send('Hello World!')
});
io.on('connection', (socket) => {
    console.log('a user connected');
    socket.emit('serverToClient', 'Hello from server to client');
    socket.on('clientToServer', data => {
        console.log(data);
    });
    socket.on('clientToClient', data => {
        socket.broadcast.emit('serverToClient', data);
    });
});