console.log('script connected')

const socket = io()
const user = document.querySelector('.speler').textContent
const messageContainer = document.getElementById('message-container')
const messageForm = document.getElementById('send-container')
const answerInput = document.getElementById('answer-input')
const playerContainer2 = document.getElementById('playerContainer')


messageForm.addEventListener('submit', e =>{
    e.preventDefault()
    const message = answerInput.value
    const answer = document.getElementById('antwoord').innerHTML

    if ( message === answer){
        var checkMSG = "Dit is goed!"
        addPoint()
        socket.emit('correct-answer', message)
    } else{
        var checkMSG = "Dit is fout!"
        socket.emit('false-answer', message)
    }

    messageContainer.scrollTop = messageContainer.scrollHeight
 
    console.log(message + ' check antwoord')
    console.log(answer + ' check msg')


    appendMessage(`Jij: ${message}`)
    appendMessage(` ${checkMSG}`)
    socket.emit('check-answer', checkMSG)
    socket.emit('send-chat-message', message)
    answerInput.value = ''
})

function appendMessage(message){
    const messageElement = document.createElement('div')
    messageElement.innerText = message
    messageContainer.append(messageElement)
}


function updateList(data) {

    playerContainer2.innerHTML = ''
    data.forEach(obj => {

        
        let me 
        if(obj.user === user){
            me = 'thisUser'
        } else {
            me = 'user'
        }

        playerContainer2.innerHTML += '<div class=' + me + '><p class="username">' + obj.user + '</p><p class="scores">' + obj.score + '</p></div>'
    })
}

function addPoint(){
    let score = document.querySelector('.thisUser .scores').innerHTML

    console.log(score + ' dit is de hduige score')

    socket.emit('point', {user: user, score: score})
}



// updates userlist, so scores and users



socket.emit('new-user', user)

socket.on('connect', () => {console.log(socket.id + 'user connected')});


socket.on('point', data =>{
    messageContainer.innerHTML += '<p>' + data.user + ' heeft het goed!</p>'

    let newScore = document.querySelector('.thisUser .scores')
    // newScore.innerHTML = data.newScore
    updateList(data)
    console.log(newScore.innerHTML)
    console.log( JSON.stringify(data) + ' punt data')
})

socket.on('chat-message', data2 => {
    console.log(JSON.stringify(data2) + 'dit is data 2')
    appendMessage(`${data2.user.user}: ${data2.message}  `)
})

socket.on('answer', checkMSG =>{
    appendMessage(` ${checkMSG}`)
})

socket.on('correct-answer-function', correct =>{
    console.log(correct)

    var answer = document.getElementById('antwoord')
    answer.innerHTML = ''
    answer.innerHTML = `${correct.fetchTest.MRData.StandingsTable.season}`

    var tableRow = document.getElementById('tableBody')
    tableRow.innerHTML = '';

 
    // var score = document.getElementById('scores').innerHTML 
    // console.log(score + ' dit is score ')
    // let scores = Number(score)
    // console.log(scores)
    //     let newScore = scores + 1
    //     document.getElementById('scores').innerHTML = newScore

    // var score = document.getElementById('scores').value
  



    // var score = parseInt(document.getElementById('scores').value, 10);
    // score = isNaN(score) ? 0 : score;
    // +score++;
 
    // console.log(typeof(score) + ' scoreee')

    

    correct.fetchTest.MRData.StandingsTable.StandingsLists[0].DriverStandings.forEach(standing => {
    var table = document.getElementById('tableBody')
    var row = table.insertRow(-1);
    var position = row.insertCell(-1);
    var driver = row.insertCell(1);
    var wins = row.insertCell(2);
    var points = row.insertCell(3);
    var team = row.insertCell(4);
    position.innerHTML = standing.position; 
    driver.innerHTML = `${standing.Driver.givenName} ${standing.Driver.familyName}`;
    wins.innerHTML = standing.wins
    points.innerHTML = standing.points
    team.innerHTML = standing.Constructors[0].name
    })
 
})





socket.on('user-connected', userData => {
    
    console.log(JSON.stringify(userData) + ' dit is de userdata')

    updateList(userData)
    // userData.forEach(user => {
    //     appendMessage(`${user.user} is erbij`)
    //     appendPlayer( `${user.user} `)
    //     appendScore(`${user.score}`)
    // })

  
    // console.log(JSON.stringify(userData) + ' dit is de userdata')
    // console.log(userData)

    // appendPlayer( `${userData.users.allUsers.user} `)
    // appendScore(`${userData.users.allUsers.score}`)
})

socket.on('user-disconnected', user => {
    
    updateList(user)
})






