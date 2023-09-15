const socket = io('http://localhost:8000');

const form = document.getElementById('sendcontainer');
const messageinput = document.getElementById('messageinp')
const messagecontainer = document.querySelector(".container")

const append = (message, position )=>{
    const messageelement = document.createElement('div');
    messageelement.innerText = message;
    messageelement.classList.add('message');
    messageelement.classList.add(position);
    messagecontainer.append(messageelement);
}
const name = prompt("enter your name to join");

socket.emit('new-user-joined', name);

socket.on('user-joined', name=>{
    append(`${name} joined the chat`, 'right')

})

// socket.on('receive', data=>{
//     append(`${data.message}: ${data.user}`, 'right')
// 

