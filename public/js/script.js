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
    } else{
        var checkMSG = "Dit is fout!"
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



socket.emit('new-user', user)

socket.on('connect', () => {console.log(socket.id + 'user connected')});



socket.on('chat-message', data => {
    console.log(data)
    appendMessage(`${data.user}: ${data.message}  `)
})

socket.on('answer', checkMSG =>{
    appendMessage(` ${checkMSG}`)
})

socket.on('newFetch', data =>{
  console.log(data)
})

socket.on('user-connected', user => {
    appendMessage(`${user} is erbij`)
    appendPlayer( `${user}`)
})

socket.on('user-disconnected', user => {
    appendMessage(`${user} is weg`)
})





