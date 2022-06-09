'use strict';
const inputValueEl = document.getElementById('input-value');
const todoListEl = document.querySelector('.todo-list');

const newElement = () => {
	const liEl = document.createElement('li');
	// ! Styles for li elements
	liEl.style.listStyle = 'none';
	liEl.style.color = '#000';
	liEl.style.fontSize = '1rem';
	liEl.style.background = '#ffffff8a';
	liEl.style.borderRadius = '20px';
	liEl.style.padding = '10px 15px';
	liEl.style.marginTop = '5px';
	liEl.style.border = '2px dotted #003fac';

	// TODO: InputValue
	const inputValueTextEl = document.createTextNode(inputValueEl.value);
	liEl.append(inputValueTextEl);

	switch (inputValueEl.value) {
		case '':
			alert("You didn't enter text!");
			break;

		default:
			todoListEl.append(liEl);
			break;
	}
	inputValueEl.value = '';
};

// TODO: Click on button
document.getElementById('btn-send').onclick = () => {
	newElement();
};
