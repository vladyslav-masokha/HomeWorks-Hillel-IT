'use strict';

let products = {
	ps841: {
		productName: 'Macbook',
		productPrice: 3000,
	},
	ps842: {
		productName: 'Iphone',
		productPrice: 1000,
	},
	ps843: {
		productName: 'Airpods',
		productPrice: 750,
	},
};

const renderProducts = () => {
	let productTemplate = ``;
	for (const key in products) {
		productTemplate += `<div class="product">`;
		productTemplate += `<h3 class="product__name">${products[key].productName}</h3>`;
		productTemplate += `<p class="product__price">$${products[key].productPrice}</p>`;
		productTemplate += `<button class="product__add" data-key='${key}'>Купити</button>`;
		productTemplate += `</div>`;
	}
	document.querySelector('.products').innerHTML = productTemplate;
};
renderProducts();
