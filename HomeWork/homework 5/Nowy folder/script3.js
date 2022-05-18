const marks = [];
function generateMarks() {
	for (let i = 0; i < 5; i++) {
		marks.push(Math.round(Math.random() * 12));
	}
	console.log(marks);
}



let numberOfStudents = +prompt('How many students are in his class?');

let studentName;
function generateList(numberOfStudents) {
	let students = [];

	do {
		studentName = prompt('State the name of the student');
	} while (numberOfStudents === '') {
		alert('Error, you entered the wrong name!');
	}

	students = {
		name: studentName
	};
}
students = {
	name: studentName,
	marks: generateMarks()
};
console.log(students);
// generateList(students);