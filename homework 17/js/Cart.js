'use strict';

let cart;
!localStorage.cart
	? (cart = [])
	: (cart = JSON.parse(localStorage.getItem('cart')));

class CartItem {
	constructor(productName, productPrice) {
		this.productName = productName;
		this.productPrice = productPrice;
	}
}

const updateLocalCart = () => {
	localStorage.setItem('cart', JSON.stringify(cart));
};

document.querySelector('.products').addEventListener('click', e => {
	if (e.target.classList.contains('product__add')) {
		const key = e.target.dataset['key'];
		if (products[key] !== undefined) {
			cart.push(
				new CartItem(products[key].productName, products[key].productPrice)
			);
		}
		updateLocalCart();
		updateCartTotal();
	}
});

function updateCartTotal() {
	let total = 0,
		price = 0,
		items = 0,
		productTitle = '',
		cartTable = '';

	if (localStorage.getItem('cart')) {
		const cart = JSON.parse(localStorage.getItem('cart'));
		items = cart.length;
		for (let i = 0; i < items; i++) {
			price = cart[i].productPrice;
			productTitle = cart[i].productName;
			cartTable +=
				'<tr><td>' +
				productTitle +
				'</td><td>$' +
				price.toFixed(2) +
				'</td></tr>';
			total += price;
		}
	}
	document.getElementById('total').innerHTML = total.toFixed(2);
	document.getElementById('cart-table').innerHTML = cartTable;
	document.getElementById('items-quantity').innerHTML = items;
}

updateCartTotal();

const emptyCart = () => {
	if (localStorage.getItem('cart')) {
		localStorage.removeItem('cart');
		cart = [];
		updateCartTotal();
		const alerts = document.getElementById('alerts');
		alerts.innerHTML = '';
		if (alerts.classList.contains('message')) {
			alerts.classList.remove('message');
		}
	}
};
document.getElementById('empty-cart').addEventListener('click', emptyCart);
