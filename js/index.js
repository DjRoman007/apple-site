let message = 'Welcome to Your apple!';
alert(message);
//clock
const clockElement = document.querySelector('.clock');
setInterval( () => clockElement.innerText = (new Date()).toLocaleTimeString(), 1000 );

