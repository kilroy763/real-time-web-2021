const express = require('express');
const app = express();
const http = require('http').createServer(app)
const io = require('socket.io')(http);
const path = require('path');
const port = 5000;
const render = require('./modules/render.js');
const fetcher = require('./modules/fetch.js');
const bodyParser = require('body-parser');
const {
    json
} = require('body-parser');
const fetch = require('node-fetch')

// link de templating engine aan express
app.set('view engine', 'ejs');

// Aan express laten weten waar de templates staan
app.set('views', 'views');


// Express laten weten dat er gebruik wordt gemaakt van een statisch folder
app.use(express.static(path.join(__dirname, '/public')));

app.use(bodyParser.urlencoded({
    extended: true
}))

app.get('/', redirect)

function redirect(req, res) {
    res.redirect('/home');
}

// alle routes
app.get('/home', render.home)

app.get('/login', render.login)

app.post('/login', render.login)

app.get('/season/drivers', render.test)

app.post('/season/drivers', render.test)

app.get('/season/constructor', render.constructor)

// array voor de users
const users = {}

// socket io connection
io.on('connection', (socket) => {
    console.log(socket.id + ' is geconnect')

    socket.on("new-user", user => {

        let roomData = []
        user = {
            user: user,
            score: 0
        }
        users[socket.id] = user

        for (const [key, value] of Object.entries(users)) {
            roomData.push(users[key])
        }

        console.log(JSON.stringify(roomData) + ' dit is de roomdata')

        io.emit('user-connected', roomData)
        console.log(JSON.stringify(users) + ' dit is user array')
        console.log(JSON.stringify(user) + ' dit zijn de users')
    })

    socket.on('send-chat-message', message => {
        console.log(message + ' dit is message')

        socket.broadcast.emit('chat-message', {
            message: message,
            user: users[socket.id]
        })
    })

    socket.on('point', data => {

        let roomData = []

        let userId = socket.id

        let score = Number(data.score)
        let newScore = score + 1
        users[userId].score = newScore


        console.log(users[userId].score + ' scoreee')

        for (const [key, value] of Object.entries(users)) {
            roomData.push(users[key])
        }

        io.emit('point', roomData)
    })

    socket.on('correct-answer', async message => {
        // fetch
        var max = '2021'
        var min = '1990'

        var season = Math.floor(Math.random() * (+max - +min)) + +min;

        const URLSeasonQ = `http://ergast.com/api/f1/${season}/driverStandings.json`;

        async function fetchData(data) {
            const fetch_response = await fetch(URLSeasonQ)
            const json = await fetch_response.json();
            return json
        }

        var fetchTest = await fetchData()
        io.emit('correct-answer-function', {
            message,
            fetchTest
        })
    })

    socket.on('check-answer', checkMSG => {
        console.log(checkMSG + ' checkmsg')

        if (checkMSG == 'Dit is goed!') {

            console.log('dit is goedd')
        } else {
            console.log('dit is fouttt')
        }

        socket.broadcast.emit('answer', checkMSG)
    })

    socket.on("disconnect", () => {
        let roomData = []
        delete users[socket.id]
        for (const [key, value] of Object.entries(users)) {
            roomData.push(users[key])
        }
        console.log(JSON.stringify(users) + ' dit zijn de users na disconnect')
        socket.broadcast.emit('user-disconnected', roomData)
    })
    

})

// server set up
http.listen(process.env.PORT || port, function () {
    console.log(`Application started on port: ${port}`);
    console.log(`Application is visible on: http://localhost:${port}`);
});