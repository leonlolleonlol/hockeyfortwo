const socket=io('http://localhost:3000');
const button=document.getElementById('helloButton');
socket.on('serverToClient', (data) => {
    alert(data);
});
socket.emit('clientToServer', 'Hello from client to server');
button.addEventListener('click', () => {
    socket.emit('clientToClient', 'Hello to the fellow clients!');
});