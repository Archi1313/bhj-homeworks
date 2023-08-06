const tale = document.getElementById("modal_main");
tale.className = "modal modal_active";
const close = Array.from(document.querySelectorAll('.modal__close'));
const succes = document.getElementById("modal_success");
close.forEach((el)=>el.onclick = function(){
	tale.className = "modal";
	succes.className= "modal";
});
const show = document.querySelector('.show-success');
show.onclick = function(){
succes.className = "modal modal_active";
}