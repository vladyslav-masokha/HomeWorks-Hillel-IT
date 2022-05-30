'use strict';
let amountOfStudents;
function getRandomStudent() {
	do {
		amountOfStudents = +prompt('How many students to generate?');
	} while (
		typeof amountOfStudents === 'number' &&
		Number.isNaN(amountOfStudents) &&
		amountOfStudents != null &&
		typeof amountOfStudents !== undefined
	);

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
	let average = studentsMock.getStudent().marks;
	console.log(average);

	// let average;
	// for (let i = 0; i < 1; i++) {
	// 	let marks = [];
	// 	average = studentsMock.getStudent().marks;
	// 	marks[i] = average.reduce((a, b) => a + b, 0);
	// 	average = marks.reduce((a, b) => a + b, 0);
	// }
	// console.log(average);

	marks.push(average);
	average = marks.map(() => {
		marks = average.reduce((a, b) => a + b / 10, 0);
	});
	marks = Math.round(marks / amountOfStudents);
	console.log(marks);

	return marks;
}
const avgGroupMark = getAvgMarkGroup();
