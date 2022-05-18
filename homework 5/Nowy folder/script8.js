'use strict';

// Marks
let DEFAULT_MARKS_AMOUNT = 5;
function getRandomMarks() {
	const marks = [];
	for (let i = 0; i < DEFAULT_MARKS_AMOUNT; i++) {
		marks.push(Math.round(Math.random() * 12));
	}
	return marks;
}

// avgMark
function sum(x) {
	let a = 0;
	for (let i = 0; i < x.length; i++) {
		a = a + x[i];
	}
	return a;
}

let numberOfStudents = +prompt('How many students in your group?');
let students = [];

// Generate students
function getGenerateList() {
	let studentName;
	for (let i = 0; i < numberOfStudents; i++) {
		studentName = prompt('State the name of the student');
		students[i] = {
			name: studentName,
			marks: getRandomMarks()
		};
	}
	return students;
}




// Average Mark
function getAverageMark(students) {

}


// Best student
function getBestStudent(students) {  // [{ name: 'John', marks: [10,12, 4, 6], avgMark: 8.7 }, ...]

}




// let max = Math.max();


// do {

// 	getGenerateList();

// 	do {
// 		switch (key) {
// 			case 1:
// 				console.log(getBestStudent());
// 				break;
// 			case 2:
// 				console.log(getGradeList());
// 			case 3:
// 				console.log(getAverageMark());
// 			default:
// 				repeat;
// 				break;
// 		}
// 	} while (prompt('Choose operation: \n1.Best student\n2.'));

// } while (confirm('Do you want to countinue'));

// let repeat;
// let chooseOperation = +prompt('Choose operation: \n1.Best student\n2.');

// while (chooseOperation) {
// 	if (chooseOperation == 1) {
// 		console.log(getBestStudent());
// 	} else if (chooseOperation == 2) {
// 		console.log(getGradeList());
// 	} else {
// 		repeat = alert('Please enter correct')
// 	}
// }



// switch (chooseOperation) {
// 	case 1:
// 		console.log(getBestStudent());
// 		break;
// 	case 2:
// 		console.log(getGradeList());
// 	case 3:
// 		console.log(getAverageMark());
// 	default:
// 		repeat;
// 		break;
// }

// if (chooseOperation == 1) {
// 	console.log(getBestStudent());
// } else if (chooseOperation == 2) {
// 	console.log(getGradeList());
// }


// for (let i = 0; i < numberOfStudents; i++) {
// 	students[i].avgMark = sum(getRandomMarks()) / getRandomMarks().length
// }
// console.log(students);