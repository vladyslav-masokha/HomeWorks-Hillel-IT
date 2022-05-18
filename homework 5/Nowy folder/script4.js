let numberOfStudents, studentName, bestMark;
let students = [];

do {
	numberOfStudents = +prompt('How many students are in his class?');
} while (numberOfStudents == '');

// Generate List
function generateList() {

	for (let i = 1; i <= numberOfStudents; ++i) {

		studentName = prompt('State the name of the student');

		const marks = [];
		for (let i = 0; i < 5; i++) {
			marks.push(Math.round(Math.random() * 12));
		}

		students.push({
			name: studentName,
			marks: marks
		});
	}
	console.log(students);
	return students;
}
generateList()


// Best Student
function bestStudent(students) {
	
}

bestStudent();

// function sum(x) {
// 	let s = 0;
// 	for (i = 0; i < x.length; i++) {
// 		s += x[i];
// 	}
// 	return s;
// }