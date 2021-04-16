const express = require('express');
const app = express();
const http = require('http').createServer(app)
const io = require('socket.io')(http);
const request = require('request');
const path = require('path');
const port = 5000;
const render = require('./modules/render.js');
const fetcher = require('./modules/fetch.js');
const bodyParser = require('body-parser')

// link de templating engine aan express
app.set('view engine', 'ejs');

// Aan express laten weten waar de templates staan
app.set('views', 'views');


// Express laten weten dat er gebruik wordt gemaakt van een statisch folder
app.use(express.static(path.join(__dirname, '/public')));

app.use(bodyParser.urlencoded({ extended: true}))

app.get('/', redirect)

function redirect(req, res) {
	res.redirect('/home');
}

app.get('/home', render.home)

app.get('/login', render.login)

app.post('/login', render.login)

app.post('/season/drivers', render.test)

app.get('/season/drivers', render.test)

app.get('/season/constructor', render.constructor)



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
        console.log(message + ' dit is message')
        socket.broadcast.emit('chat-message', {message: message, user: users[socket.id]})
    })

    socket.on('check-answer', checkMSG => {
        console.log(checkMSG + ' checkmsg')

        if (checkMSG == 'Dit is goed!'){

            console.log('dit is goedd')
        } else{
            console.log('dit is fouttt')
        }

      
        socket.broadcast.emit('answer', checkMSG)
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
