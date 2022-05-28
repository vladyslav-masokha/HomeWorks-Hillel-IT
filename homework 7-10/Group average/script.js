'use strict';

let amountOfStudents;
do {
	amountOfStudents = +prompt('How many students to generate?');
} while (typeof amountOfStudents === "number" && Number.isNaN(amountOfStudents) && amountOfStudents != null && typeof amountOfStudents !== undefined);

function getRandomStudent() {
	
	const students = [];
	for (let i = 0; i < amountOfStudents; i++) {
		students.push(studentsMock.getStudent());
	}
	console.log(students);
	return students;
}
const students = getRandomStudent();


function getAvgMarkGroup() {
	
	let marks = [];
	let average;

	for (let i = 0; i < amountOfStudents; i++) {
		average = studentsMock.getStudent().marks;
		marks[i] = average.reduce((a,b) => a + b, 0);
		average = marks.reduce((a,b) => a + b, 0);
	}

	marks = Math.round(average / marks.length);

	console.log(marks);
	return marks;
}
const avgGroupMark = getAvgMarkGroup();