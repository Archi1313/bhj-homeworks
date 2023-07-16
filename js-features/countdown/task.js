var counter = document.getElementById("timer").textContent;

let countdown = setInterval(()=> {
	if (counter===0){
		clearInterval(countdown);
		alert("Вы победеили в конкурсе!");
		return;
		}
 	counter=counter-1;
 	document.getElementById("timer").textContent=counter;
 	}
, 1000);
