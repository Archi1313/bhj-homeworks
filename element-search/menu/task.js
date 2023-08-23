const links = Array.from(document.querySelectorAll('.menu__link'));
links.forEach((link)=>link.onclick = function(){
	if (link.closest('.menu__item').querySelector('.menu_sub')) {
			link.closest('.menu__item').querySelector('.menu_sub').className = "menu menu_sub menu_active";
			return false;
			}
});

