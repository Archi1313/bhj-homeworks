const picture=document.getElementById('loader');
let r;
let valutes=[];
const xhr = new XMLHttpRequest();
const all=document.getElementById('items');

xhr.addEventListener('readystatechange', ()=>{
	if (xhr.readyState===xhr.DONE){
		r=xhr.response;
		r=JSON.parse(r);
		r=r.response.Valute;
		for (let el in r){
		valutes.push(el);
		}
	picture.classList.toggle('loader_active');
	for (let i=0; i<valutes.length; i++){
		all.innerHTML+=`<div class="item">
            
          </div>`;
        all.lastChild.innerHTML=`<div class="item">
            <div class="item__code">`
                    +r[valutes[i]].CharCode+
                `</div>
                <div class="item__value">`
                    +r[valutes[i]].Value+
                `</div>
                <div class="item__currency">`
                    +`руб.`+
                `</div>
          </div>`

	}

	}
})
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();

