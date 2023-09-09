const loo = Array.from(document.querySelectorAll('.reveal'));
window.addEventListener('scroll', function(event){
	for (el of loo){
		const top = el.getBoundingClientRect().top;
		const bottom = el.getBoundingClientRect().bottom;
			if (top<window.innerHeight){
				el.classList.add('reveal_active');
			}
			if (bottom<window.innerHeight/2){
				el.classList.remove('reveal_active');	
				}
			}
})


	