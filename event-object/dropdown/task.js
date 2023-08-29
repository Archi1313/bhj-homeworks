const list = Array.from(document.querySelectorAll('.dropdown__item'));
let activeValue = document.querySelector('.dropdown__value');

activeValue.onclick = function () {
	document.querySelector('ul').className = "dropdown__list dropdown__list_active";
	}
for ( let el of list){
el.addEventListener('click', function (event){
	event.preventDefault();
	activeValue.textContent=el.textContent;
	document.querySelector('ul').className = "dropdown__list";
	 });
}