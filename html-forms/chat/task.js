const sideBadge = document.querySelector('.chat-widget__side');
const chatWindow = document.querySelector('.chat-widget');
const say = document.getElementById('chat-widget__input');
const chatBaloon = document.getElementById('chat-widget__messages');
let messageArray = ["Добрый день, мы ещё не проснулись. Позвоните через 10 лет","Добрый день! Гитлер капут!","Добрый день!","Кобэйн просто вышел покурить...","Я не злопамятный, я злой и все записыаю"];

sideBadge.addEventListener('click', () => {
	chatWindow.classList.add('chat-widget_active');
})

say.addEventListener('keyup', function (event) {
	if (event.code==='Enter') {
		if (this.value != '') {
			chatBaloon.innerHTML += `
 			 <div class="message message_client">
    			<div class="message__time">`+new Date().getHours()+':'+new Date().getMinutes()+`</div>
    			<div class="message__text">`+this.value+`</div>
  			</div>
			`;
		}
	this.value='';
	chatBaloon.innerHTML += `
 			 <div class="message">
    			<div class="message__time">`+new Date().getHours()+':'+new Date().getMinutes()+`</div>
    			<div class="message__text">`+messageArray[Math.floor(Math.random() * 5)]+`</div>
  			</div>
			`;
	}
})