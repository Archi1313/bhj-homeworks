const cheks = Array.from(document.getElementsByTagName('input'));
 
 for (let el of cheks) {
 	el.addEventListener('change', function (event) {
 		if (!el.closest('.interests_active')){
 			let list = Array.from(el.closest('li').getElementsByTagName('input'));
 			for (let interest of list){
 				interest.checked = el.checked;
 			}
 		}
 	});
 }