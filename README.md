# websocket-notes

The design is inspired by google keep, which behaves similarly in function; also defined by the specs. The implemented features include:
- list of notes
- add note
- remove note
- note contains description/content, latest change & user (ip, as no authentication)
- server connection status
- list of other connected users (click on status to view other users currently connected)
- real time updates to the list & other connected users

To be implemented:
- local storage to enable offline compatability
- updating a note
- error handling (mainly websocket error handling)

The feature of updating a note is particularly time expensive, as handling collisions depends on user experiences i.e. if both update a note, which is chosen? how are conflicts handled? This can be approached in multiple ways, the best way would be similar to github merge. Any conflicts then the user is notified; and the changes are made by the user. Any changes without conflicts (i.e. additions to the note) then the update is pushed as it has no direct change on the existing content.

Local storage is also one of the best ways to handle offline edits. When connection does not exist, the user should be allowed to proceed as usual and when the user finally estabilishes a connect a comparison of their local storage is made with the persistent storage (i.e. the server). This again, also can require conflict merging which is time expensive.

Upon further development, I would most likely improve on the state management system of React (using redux), as I have not used it too much it would have drastically increased the development time. As well as this, any client errors are not handled well. Server errors will result in a crash; stopping the process.

Technologies used:
- React
- WebSocket.io
- SASS (compiled with compass)

Live demo can be found (http://209.97.180.214:5000/)[here]
ps. if the live demo seems to be down, either email arran@gravestock.net

## create own local network notes
find your own ip, via cmd and run `ipconfig`, edit `/websocket-notes/client/src/app.js` line 11, change the ip to your local ip (note: localhost will not work, requires direct ip)
build your edit by running in `/websocket-notes/client`:
`npm run build`
to finally run:
cd to `/websocket-notes/client/` and run:
`serve -s build`
cd to `/websocket-notes/server/src/` and run:
`node main.js`
