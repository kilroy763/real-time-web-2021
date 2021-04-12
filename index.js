const express = require('express');
const app = express();
var bodyParser = require('body-parser')
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

app.use(bodyParser.urlencoded({ extended: true}))

app.use(bodyParser.json())

// Als de route "/" is dan moet de site geredirect worden naar "/breakingbad"
app.get('/', redirect)

function redirect(req, res) {
	res.redirect('/home');
}

app.get('/home', render.home)

app.get('/test', render.test)


app.post('/test', render.test, function (req, res) {
    var check= document.getElementById("check").value == "text_value";

    //check will be true or false
    if (check){
        console.log('true')
    } //do something if true}
    if(!check){
        console.log('false')
    }//do something if false}
} 
)

// app.get('/actor', render.actor);

// app.get('/movie', render.movie);

// app.get('/show', render.show);



io.on('connection', (socket) => {
    console.log('a user has connected')
    console.log(socket.id)

    socket.on('disconnect', () => {
        console.log('user disconnected')
    })
})


// server set up

http.listen(process.env.PORT || port, function (){
    console.log(`Application started on port: ${port}`);
	console.log(`Application is visible on: http://localhost:${port}`);
  });
