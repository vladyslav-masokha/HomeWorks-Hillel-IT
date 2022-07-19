'use strict';

let orders;
!localStorage.orders
	? (orders = [])
	: (orders = JSON.parse(localStorage.getItem('orders')));

const updateLocalOrders = () => {
	localStorage.setItem('orders', JSON.stringify(orders));
};

function order() {
	let price = 0,
		items = 0,
		productName = '',
		order = '';

	if (localStorage.getItem('cart')) {
		const cart = JSON.parse(localStorage.getItem('cart'));

		for (const key in cart) {
			orders.push(cart[key]);
		}
		updateLocalOrders();

		items = orders.length;
		const newDate = new Date().toDateString();

		for (let i = 0; i < items; i++) {
			price = orders[i].productPrice;
			productName = orders[i].productName;
			order +=
				'<tr><td>' +
				newDate +
				'</td><td>' +
				productName +
				'</td><td>$' +
				price.toFixed(2) +
				'</td></tr>';
		}
	}
	localStorage.removeItem('cart');

	document.getElementById('orders').innerHTML = order;
	document.getElementById('cart-table').innerHTML = '';
	document.getElementById('total').innerHTML = 0;
	document.getElementById('items-quantity').innerHTML = 0;
}
document.getElementById('checkout').addEventListener('click', order);
