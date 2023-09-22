const input = document.querySelector('input');
const taskList = document.querySelector('.tasks__list');
let remove;

input.addEventListener('submit', function (event) {
	event.preventDefault();
})

input.addEventListener('keyup', function (event) {
	if ((event.code==='Enter')&(input.value!='')) {
		taskList.innerHTML+=`<div class="task">
  <div class="task__title">`
    +input.value+
  `</div>
  <a href="#" class="task__remove">&times;</a>
</div>`
	input.value='';
	}
	 remove=taskList.querySelectorAll('.task__remove');
})

taskList.addEventListener('click', function (event){
	if (Array.from(remove).includes(event.target)){
		event.target.closest('.task').remove();
	}
})