const tooltip = Array.from(document.querySelectorAll('.has-tooltip'));
for (let el of tooltip) {
		let elem = document.createElement('div');
		elem.classList="tooltip";
		elem.textContent=el.title;
		el.appendChild(elem);
	}
for (let el of tooltip) {
	el.addEventListener('click', function(event){
		event.preventDefault();
		
		el.querySelector('div').classList.toggle('tooltip_active');
	})
}
//так и не придумал, как отцентрировать подсказку относительно родителя(