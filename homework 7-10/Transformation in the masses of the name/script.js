'use strict';

function getRandomStudent() {
	let amountOfStudents;
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

function getNameStudent() {
	let nameStudents = [];

	// for (let i = 0; i < amountOfStudents; i++) {
	// 	nameStudents[i] = students[i].name;
	// }
	
	nameStudents = students.map(a => a.name);
	console.log(nameStudents);
	return nameStudents;
}
const names = getNameStudent(students);
