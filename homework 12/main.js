'use strict';
let inputValueEl;
let inputValueTextEl;

const newElement = () => {
	const liEl = document.createElement('li');
	// ! Styles for li elements
	liEl.style.listStyle = 'none';
	liEl.style.color = '#fff';
	liEl.style.fontSize = '1rem';
	liEl.style.background = '#ffffff4d';
	liEl.style.borderRadius = '20px';
	liEl.style.padding = '10px 15px';
	liEl.style.marginTop = '5px';

	// TODO: InputValue
	inputValueEl = document.getElementById('input-value').value;
	inputValueTextEl = document.createTextNode(inputValueEl);
	liEl.append(inputValueTextEl);

	switch (inputValueEl) {
		case '':
			alert("You didn't enter text!");
			break;

		default:
			document.querySelector('.todo-list').append(liEl);
			break;
	}
	document.getElementById('input-value').value = '';
};

// TODO: Click on button
document.getElementById('btn-send').onclick = () => {
	newElement();
};
