alert('Hello, user!');
console.log('Hello, user!');

const chooseOperation = prompt('Choose an operation (+,-,*,/,%,sin,cos,degree)');
let firstNumber = +prompt('Enter the first number');
let secondNumber = +prompt('Enter the second number');

const convert = Math.PI / 180;

let degree, pow,sum,diff, mult,div, remainder, sin,cos;

if (chooseOperation == '+') {
	sum = 'Result: ' + firstNumber + ' + ' + secondNumber + ' = ' + (firstNumber + secondNumber);
	alert(sum);
	console.log(sum);
} else if (chooseOperation == '-') {
	diff = 'Result: ' + firstNumber + ' - ' + secondNumber + ' = ' + (firstNumber - secondNumber);
	alert(diff);
	console.log(diff);
} else if (chooseOperation == '*') {
	mult = 'Result: ' + firstNumber + ' * ' + secondNumber + ' = ' + (firstNumber * secondNumber);
	alert(mult);
	console.log(mult);
} else if (chooseOperation == '/') {
	div = 'Result: ' + firstNumber + ' / ' + secondNumber + ' = ' + (firstNumber / secondNumber);
	alert(div);
	console.log(div);
} else if (chooseOperation == '%') {
	remainder = 'Result: ' + firstNumber + ' % ' + secondNumber + ' = ' + (firstNumber % secondNumber);
	alert(remainder);
	console.log(remainder);
} else if (chooseOperation == 'sin') {
	sin = 'Result: ' + 'sin' + firstNumber + ' = ' + Math.sin(firstNumber * convert);
	alert(sin);
	console.log(sin);
} else if (chooseOperation == 'cos') {
	cos = 'Result: ' + 'cos' + firstNumber + ' = ' + Math.cos(firstNumber * convert);
	alert(cos);
	console.log(cos);
} else if (chooseOperation == 'degree') {
	degree = prompt('Enter degree.');
	pow = 'Result: ' + firstNumber + ' to the power of' + degree + ' = ' + Math.pow(firstNumber, degree);
	alert(pow);
	console.log(pow);
} else {
	alert('You didn\'t enter a number.');
	console.log('You didn\'t enter a number.');
}
