const tooltip = document.querySelectorAll('.has-tooltip');
for (let i=0; i<tooltip.length; i++) {
		tooltip[i].insertAdjacentHTML('beforeBegin', '<div class="tooltip">'+tooltip[i].title+'</div>');
		let coords = tooltip[i].getBoundingClientRect();
		tooltip[i].previousElementSibling.style.left = coords.left/2 + "px";
		tooltip[i].previousElementSibling.style.left = coords.bottom/2 + "px";
	}
for (let i=0; i<tooltip.length; i++) {
	tooltip[i].addEventListener('click', function(event){
		event.preventDefault();
		tooltip[i].previousElementSibling.classList.toggle('tooltip_active');
	})
}
//так и не придумал, как отцентрировать подсказку относительно родителя(