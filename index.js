const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const request = require('request');
const path = require('path');
const port = 5000;
const render = require('./modules/render.js');

// link de templating engine aan express
app.set('view engine', 'ejs');

// Aan express laten weten waar de templates staan
app.set('views', 'views');

// Express laten weten dat er gebruik wordt gemaakt van een statisch folder
app.use(express.static(path.join(__dirname, '/public')));

// Als de route "/" is dan moet de site geredirect worden naar "/breakingbad"
app.get('/', redirect)

function redirect(req, res) {
	res.redirect('/test');
}

app.get('/home', render.home)

app.get('/test', render.test)


app.post('/test', render.test)


const users = {}

io.on('connection', (socket) => {
    console.log(socket.id + 'is geconnect')

    socket.on("new-user", user => {
        users[socket.id] = user
        socket.broadcast.emit('user-connected', user)
    })

    socket.on("disconnect", () => {
        socket.broadcast.emit('user-disconnected', users[socket.id])
        delete users[socket.id] 
    })

    socket.on('send-chat-message', message => {
        console.log(message)
        socket.broadcast.emit('chat-message', {message: message, user: users[socket.id]})
    })

    socket.on('disconnect', () => {
        console.log('user disconnected')
    })
})


// server set up
http.listen(process.env.PORT || port, function (){
    console.log(`Application started on port: ${port}`);
	console.log(`Application is visible on: http://localhost:${port}`);
  });
