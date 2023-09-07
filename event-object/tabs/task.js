const tabs = Array.from(document.querySelectorAll('.tab'));
const content =Array.from(document.querySelectorAll('.tab__content'));

for ( let el of tabs){	
	el.addEventListener('click', function (event){
	let pos=document.querySelector('.tab_active');
	el.className = "tab tab_active";
	content[tabs.indexOf(el)].className = "tab__content tab__content_active";
	pos.className="tab";
	content[tabs.indexOf(pos)].className = "tab__content";
	});
}
