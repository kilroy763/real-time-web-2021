console.log('script connected')

const socket = io()
const user = prompt('Wat is je gebruikersnaam?')
const messageContainer = document.getElementById('message-container')
const messageForm = document.getElementById('send-container')
const answerInput = document.getElementById('answer-input')

messageForm.addEventListener('submit', e =>{
    e.preventDefault()
    const message = answerInput.value

    if ( message == '2019'){
        var checkMSG = " Hij heeft het goed!"
    } else{
        var checkMSG = ". Hij heeft het  fout!"
    }

    appendMessage(`Jij: ${message} ${checkMSG}`)
    socket.emit('send-chat-message', message)
    answerInput.value = ''
})

function appendMessage(message){
    const messageElement = document.createElement('div')
    messageElement.innerText = message
    messageContainer.append(messageElement)
}

socket.emit('new-user', user)

socket.on('connect', () => {console.log(socket.id + 'user connected')});

socket.on('chat-message', data => {
    console.log(data)
    appendMessage(`${data.user}: ${data.message} ${data.checkmessage} `)
})

socket.on('user-connected', user => {
    appendMessage(`${user} is erbij`)
})

socket.on('user-disconnected', user => {
    appendMessage(`${user} is weg`)
})





