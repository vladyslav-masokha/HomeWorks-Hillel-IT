alert('Hello, user!');
console.log('Hello, user!');

let chooseOperation;
const convert = Math.PI / 180;
let history = ``;

do {
	do {
		chooseOperation = prompt('Choose an operation (+,-,*,/,%,sin,cos,degree)');
	} while (chooseOperation == '') {}
	
	if (chooseOperation != chooseOperation) {
		console.log('Wrong operation!');
	} else {
	
		let result,operand,degree,firstNumber,secondNumber;
	
		switch (chooseOperation) {
			case '+':
			case '-':
			case '*':
			case '/':
			case '%':
				do {
					firstNumber = +prompt('Enter the first number');
				} while (firstNumber != firstNumber);
	
				do {
					secondNumber = +prompt('Enter the second number');
				} while (secondNumber != secondNumber);
				break;
			case 'sin':
			case 'cos':
			case 'degree':
				operand = +prompt('Enter the number');
			break;
		}
		
			switch (chooseOperation) {
				case '+':
					result = 'Result: ' + firstNumber + ' + ' + secondNumber + ' = ' + (firstNumber + secondNumber);
					console.log(result);
					history = history + result + '\n';
					break;
				case '-':
					result = 'Result: ' + firstNumber + ' - ' + secondNumber + ' = ' + (firstNumber - secondNumber);
					console.log(result);
					history = history + result + '\n';
					break;
				case '*':
					result = 'Result: ' + firstNumber + ' * ' + secondNumber + ' = ' + (firstNumber * secondNumber);
					console.log(result);
					history = history + result + '\n';
					break;
				case '/':
					result = 'Result: ' + firstNumber + ' / ' + secondNumber + ' = ' + (firstNumber / secondNumber);
					console.log(result);
					history = history + result + '\n';
					break;
				case '%':
					result = 'Result: ' + firstNumber + ' % ' + secondNumber + ' = ' + (firstNumber % secondNumber);
					console.log(result);
					history = history + result + '\n';
					break;
				case 'sin':
					result = 'Result: ' + 'sin' + operand + ' = ' + Math.sin(operand * convert);
					console.log(result);
					history = history + result + '\n';
					break;
				case 'cos':
					result = 'Result: ' + 'cos' + operand + ' = ' + Math.cos(firstNumber * convert);
					console.log(result);
					history = history + result + '\n';
					break;
				case 'degree':
					degree = +prompt('Enter degree.');
					result = 'Result: ' + operand + ' in degree' + degree + ' = ' + Math.pow(operand, degree);
					console.log(result);
					history = history + result + '\n';
					break;
			
				default:
					alert('Wrong operation!');
					console.log('Wrong operation!');
					break;
			}
		}
} while (confirm('Do you want to repeat the operation?')) {

	if (confirm('Do you want to view the history of completed calculations for the session?')) {
		console.log(history);
	}

	console.log('Thanks for using the calculator.');

}
