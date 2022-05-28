'use strict';

const DEFAULT_REPEAT = 5;

function randomNumbers() {
	const numbers = [];
	for (let i = 0; i < DEFAULT_REPEAT; i++) {
		numbers[i] = Math.round(Math.random()*12);
	}
	return numbers;
}
const randomNumber = randomNumbers();


function filterRange(randomNumber, a, b) {
	return randomNumber.filter(item => {
		return a <= item && item <= b;
	});
}

// const arr = [5, 3, 8, 1];
const filtered = filterRange(randomNumber, 1, 4);
console.log(filtered);
console.log(randomNumber);