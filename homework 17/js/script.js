'use strict';

// Render HTML template (Products)
const render = (template, payload) => {
	return Object.keys(payload).reduce((tpl, key) => {
		return tpl.replaceAll(`{{${key}}}`, payload[key]);
	}, template);
};

const products = [
	{ productName: 'Macbook', productPrice: 3000 },
	{ productName: 'Iphone', productPrice: 1000 },
	{ productName: 'Airpods', productPrice: 750 },
];

const renderProducts = () => {
	const productsEl = document.querySelector('.product-count');
	const productTemplate = document.getElementById('product-template').innerHTML;
	productsEl.insertAdjacentHTML(
		'afterbegin',
		products.map(e => render(productTemplate, e)).join('')
	);
};
renderProducts();

updateCartTotal();

document.getElementById('empty-cart').addEventListener('click', emptyCart);
const addToCartEl = document.querySelectorAll('.add-to-cart');
addToCartEl.forEach(e => {
	e.addEventListener('click', function () {
		addToCart(this);
	});
});

const addToCart = element => {
	let sibs = [];
	let getprice;
	let getproductName;
	let cart = [];

	while ((element = element.previousSibling)) {
		if (element.nodeType === 3) continue;
		if (element.className == 'price') {
			getprice = element.innerText;
		}
		if (element.className == 'product-name') {
			getproductName = element.innerText;
		}
		sibs.push(element);
	}

	const product = {
		productName: getproductName,
		price: getprice,
	};

	if (!localStorage.getItem('cart')) {
		cart.push(JSON.stringify(product));
		localStorage.setItem('cart', JSON.stringify(cart));
		addedToCart(getproductName);
		updateCartTotal();
	} else {
		cart = JSON.parse(localStorage.getItem('cart'));
		cart.push(JSON.stringify(product));
		localStorage.setItem('cart', JSON.stringify(cart));
		addedToCart(getproductName);
		updateCartTotal();
	}
};

function updateCartTotal() {
	let total = 0,
		price = 0,
		items = 0,
		productName = '',
		cartTable = '';

	if (localStorage.getItem('cart')) {
		const cart = JSON.parse(localStorage.getItem('cart'));
		items = cart.length;
		const newDate = new Date().toDateString();
		for (let i = 0; i < items; i++) {
			price = parseFloat(JSON.parse(cart[i]).price.split('$')[1]);
			productName = JSON.parse(cart[i]).productName;
			cartTable +=
				'<tr><td>' +
				newDate +
				'</td><td>' +
				productName +
				'</td><td>$' +
				price.toFixed(2) +
				'</td></tr>';
			total += price;
		}
	}
	// new Date().toDateString()
	document.getElementById('total').innerHTML = total.toFixed(2);
	document.getElementById('cart-table').innerHTML = cartTable;
	document.getElementById('items-quantity').innerHTML = items;
}

function addedToCart(productName) {
	const message = productName + ' був добавлений в корзинк';
	const alerts = document.getElementById('alerts');
	alerts.innerHTML = message;
	if (!alerts.classList.contains('message')) {
		alerts.classList.add('message');
	}
}

function emptyCart() {
	if (localStorage.getItem('cart')) {
		localStorage.removeItem('cart');
		updateCartTotal();
		const alerts = document.getElementById('alerts');
		alerts.innerHTML = '';
		if (alerts.classList.contains('message')) {
			alerts.classList.remove('message');
		}
	}
}
