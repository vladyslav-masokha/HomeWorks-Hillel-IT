'use strict';
const getName = document.getElementById('block-name');
const btnClick = document.getElementById('btn-click');
const hiddenBlock = document.getElementById('hidden');
const helloUser = document.getElementById('hello');

btnClick.onclick = () => {
	console.log(getName.value);
	hiddenBlock.style.display = 'none';
	helloUser.innerHTML = `Hello, ${getName.value}`;
};
