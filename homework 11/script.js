'use strict';
const getNameEl = document.getElementById('block-name');
const btnClickEl = document.getElementById('btn-click');
const hiddenBlockEl = document.getElementById('hidden');
const helloUserEl = document.getElementById('hello');

btnClickEl.onclick = () => {
	console.log(getNameEl.value);
	hiddenBlockEl.style.display = 'none';
	helloUserEl.innerHTML = `Hello, ${getNameEl.value}`;
};
