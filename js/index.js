'use strict';


const clockElement = document.querySelector('.clock');
setInterval( () => clockElement.innerText = (new Date()).toLocaleTimeString(), 1000 );

document.querySelectorAll('.button').forEach(button => button.addEventListener('click', buttonBuy));
function buttonBuy (ev) {
    alert ('You buy this product')
}
