var coock = document.getElementById("cookie");
var counter=0;
coock.onclick = function(){
	if (counter%2 === 0) {
		coock.width=300;
	} else {
	 coock.width=200
	}
	counter++;
	document.getElementById("clicker__counter").textContent=counter;
}  