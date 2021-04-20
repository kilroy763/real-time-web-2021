console.log('script connected')

const socket = io()
const user = document.querySelector('.speler').textContent
const messageContainer = document.getElementById('message-container')
const messageForm = document.getElementById('send-container')
const answerInput = document.getElementById('answer-input')


messageForm.addEventListener('submit', e =>{
    e.preventDefault()
    const message = answerInput.value
    const answer = document.getElementById('antwoord').innerHTML

    if ( message === answer){
        var checkMSG = "Dit is goed!"
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

function appendPlayer(player){
    const playerElement = document.createElement('div')
    playerElement.innerText = player
    playerContainer.append(playerElement)
}

function appendScore(score){
    const playerElement = document.createElement('span')
    playerElement.setAttribute("id", "scores");
    playerElement.innerText = score
    playerContainer.append(playerElement)
}



socket.emit('new-user', user)

socket.on('connect', () => {console.log(socket.id + 'user connected')});



socket.on('chat-message', data2 => {
    console.log(data2)
    appendMessage(`${data2.user}: ${data2.message}  `)
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

 
    var score = document.getElementById('scores').innerHTML 
    console.log(score + ' dit is score ')
    let scores = Number(score)
    console.log(scores)
        let newScore = scores + 1
        document.getElementById('scores').innerHTML = newScore

    // var score = document.getElementById('scores').value
  



    // var score = parseInt(document.getElementById('scores').value, 10);
    // score = isNaN(score) ? 0 : score;
    // +score++;
 
    console.log(typeof(score) + ' scoreee')

    

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
    appendMessage(`${userData.user} is erbij`)
    console.log(userData)
    appendPlayer( `${userData.user} `)
    appendScore(`${userData.score}`)
})

socket.on('user-disconnected', user => {
    appendMessage(`${user} is weg`)
})






