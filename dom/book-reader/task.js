const fonts = Array.from(document.querySelectorAll('.font-size'));
const book = document.querySelector('.book');

const bookFont = document.querySelector('.book__control');
	bookFont.addEventListener('click', function (event){
	event.preventDefault();
 	if (fonts.indexOf(event.target)===0){
	book.className = "book book_fs-small";

	} else if (fonts.indexOf(event.target)===2){
		book.className = "book book_fs-big";
	} else {
		book.className = "book";
	}
	let act = document.querySelector('.font-size_active');
	act.classList.remove('font-size_active');
	event.target.classList.toggle('font-size_active');
	});


