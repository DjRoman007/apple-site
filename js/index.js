'use strict'
let welcome = 'Welcome to Your apple!';
alert(welcome);
//clock
const clockElement = document.querySelector('.clock');
setInterval( () => clockElement.innerText = (new Date()).toLocaleTimeString(), 1000 );

