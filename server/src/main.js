const WebSocket = require('ws');

const ws = new WebSocket.Server({port: 3001});

ws.on('connection', function connection(ws) {
    console.log("connected");
    ws.on('message', function incoming(message) {
        console.log(message)
    })
  });

  ws.on('message', function incoming(data) {
    console.log(data);
  });