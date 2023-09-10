const fonts = Array.from(document.querySelectorAll('.font-size'));
const books = document.querySelector('.book');
let act = document.querySelector('.font-size_active');
for (el of fonts) {
	el.addEventListener('click', function (event){
	event.preventDefault();
 	if (fonts.indexOf(el)===0){
	book.className = "book book_fs-small";
	} else if (fonts.indexOf(el)===2){
		book.className = "book book_fs-big";
	} else {
		book.className = "book";
	}
	act.classList.remove('font-size_active');
	el.classList.toggle('font-size_active');
	});

}
//при клике мышкой на любой из элементов fonts событие происходит на третьем элементе с классом font-size_big (проверял с помощью getBoundingClientRect, у всех трех элементов одни координаты)