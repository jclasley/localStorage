const WebSocket = require('ws');
const serverURL = '127.0.0.1:8080';
const ws = new WebSocket(`ws://${serverURL}`);
const process = require('process');
console.log('this is the websocket from the client-side')
ws.on('open', () => {
  ws.send('sending from client');
})
ws.on('message', message => console.log(`incoming from server: ${message}`));
ws.on('close', () => {
  ws.send('socket disconnected');
})

process.stdin.on('data', data => {
  ws.send(data);
});
