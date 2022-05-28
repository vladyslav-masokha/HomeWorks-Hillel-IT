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


function getNameStudent() {
	let nameStudents = [];
	for(let i = 0; i< amountOfStudents; i++) {
		nameStudents[i] = students[i].name;
	}
	console.log(nameStudents);
	return nameStudents;
}
const names = getNameStudent(students);