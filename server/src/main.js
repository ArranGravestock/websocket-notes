const WebSocket = require('ws');

const wss = new WebSocket.Server({port: 3002});

let notes = []
let users_active = []

wss.on('connection', function connection(ws, req) {

  //add the new client to the list of active users
  users_active.push(ws._socket.remoteAddress.replace('::ffff:', ''))
  let user = ws._socket.remoteAddress;
  broadCast({type: 'clientList', data: users_active})

  //initialise notes for a new connection
  ws.send(JSON.stringify(notes))

  ws.on('message', function incoming(message) {
    const msg = JSON.parse(message)
    switch(msg.type) {
      case "create":
        createNote(msg.title, msg.content, msg.metadata, ws._socket.remoteAddress)
        broadCast(notes)
        break;
      case "delete":
        deleteNote(msg.id)
        broadCast(notes)
        break;
      case "update":
        break;
    }
  })

  ws.on('close', close = (ws, req) => {
    console.log("closed" + user);
    deleteActiveUser(user)
    broadCast({type: 'clientList', data: users_active})
  });
});

const broadCast = (data) => {
  wss.clients.forEach(function each(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(data))
    }
  })
}

const createNote = (title, content, metadata, user) => {

  let obj = {
    id: notes.length + 1,
    title: title,
    content: content,
    metadata: metadata,
    user: user
  }

  notes.push(obj)
}

const deleteNote = (id) => {
  let note = notes.filter(n => n.id === id)
  notes.splice(notes.indexOf(note), 1)
}

const deleteActiveUser = (id) => {
  let user = users_active.filter(n => n === id)
  users_active.splice(users_active.indexOf(user), 1)
}

const updateNote = (id, title, content, metadata) => {
  let note = notes.filter(n => n.id === id)
  note.title = title
  note.content = content
  note.metadata = metadata
  notes[id] = note
}