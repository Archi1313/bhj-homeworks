const slides = Array.from(document.querySelectorAll('.rotator__case'));
let i = 0;
let mimic;
let t = setInterval(() => {
	mimic = document.querySelector('.rotator__case_active');
	mimic.classList.toggle('rotator__case_active');
	if (i<slides.length-1){
		i++;
		} else {
			i=0;
		}
	slides[i].className = "rotator__case rotator__case_active";
}, 1000);