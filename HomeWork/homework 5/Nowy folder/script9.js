'use strict';
let numberOfStudents = +prompt('How many students in your group?');
let students = [];

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



// Generate students
function getGenerateList(numberOfStudents) {
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

