const goods = document.querySelectorAll('.product');
const dec = document.querySelectorAll('.product__quantity-control_dec');
const inc = document.querySelectorAll('.product__quantity-control_inc');
const add = document.querySelectorAll('.product__add');
let cart;
let arr;


for (let i=0; i<dec.length; i++){
	dec[i].addEventListener('click', function(event){
		if (dec[i].closest('.product__quantity-controls').querySelector('.product__quantity-value').textContent>1){
		dec[i].closest('.product__quantity-controls').querySelector('.product__quantity-value').textContent--;
		}
	})
}

for (let i=0; i<inc.length; i++){
	inc[i].addEventListener('click', function(event){
		inc[i].closest('.product__quantity-controls').querySelector('.product__quantity-value').textContent++;
	})
}

for (let i=0; i<add.length; i++){
	add[i].addEventListener('click', function(event){
		 cart=document.querySelector('.cart__products');
		let copy=add[i].closest('.product');
		arr=cart.children;
		for (let el of arr){
			if (el.dataset.id===copy.dataset.id){
				console.log(el);
				el.querySelector(".cart__product-count").textContent=Number(el.querySelector(".cart__product-count").textContent)+Number(copy.querySelector('.product__quantity-value').textContent);
				return;
			}
		}
		
		cart.innerHTML+=`<div class="cart__product" data-id=`+copy.dataset.id+`>
    <img class="cart__product-image" src=`+copy.querySelector('.product__image').src+`>
    <div class="cart__product-count">`+copy.querySelector('.product__quantity-value').textContent+`</div>
</div>`;
			
	})
}