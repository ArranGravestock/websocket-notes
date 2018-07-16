const WebSocket = require('ws');

const ws = new WebSocket.Server({port: 3001});

let notes = []
let users_active = []

ws.on('connection', function connection(ws, req) {
  console.log("connected" + ws._socket.remoteAddress);
  //users_active.push(ws._socket.remoteAddress)
  ws.send(JSON.stringify(notes))

  ws.on('message', function incoming(message) {
    const msg = JSON.parse(message)
    console.log(msg.type)
    switch(msg.type) {
      case "create":
        createNote(msg.title, msg.content, msg.metadata)
        ws.send(JSON.stringify(notes))
        break;
      case "delete":
        deleteNote(msg.id)
        break;
      case "update":
        //test()
        break;
      case "":
        //test()
        break;
    }
  })
});

ws.on('close', function close(ws, req) {
  console.log("closed" + ws._socket.remoteAddress);

});

const createNote = (title, content, metadata) => {

  let obj = {
    id: notes.length + 1,
    title: title,
    content: content,
    metadata: metadata
  }

  notes.push(obj)
  console.log(notes)
}

const deleteNote = (id) => {
  let note = notes.filter(n => n.id === id)
  notes.splice(notes.indexOf(note), 1)
}

const updateNote = (title, content, metadata) => {

}

// createNote("test2", "test2", {id:"test"})
// createNote("test3", "test3", {id:"test3"})
// console.log(notes)
// deleteNote(1)
// console.log(notes)