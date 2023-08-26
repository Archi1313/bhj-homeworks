const gallery = Array.from(document.querySelectorAll('.slider__item'));
let position = 0;
const prev = document.querySelector('.slider__arrow_prev');
const next = document.querySelector('.slider__arrow_next');
prev.onclick = function(){
	position--;
	if (position<0) {
		position=gallery.length-1;
		}
	document.querySelector('.slider__item_active').className="slider__item";
	gallery[position].className = "slider__item slider__item_active";
	};
next.onclick = function(){
	position++;
	if (position>4) {
		position=0;
	}
	document.querySelector('.slider__item_active').className="slider__item";
	gallery[position].className = "slider__item slider__item_active";
	};
