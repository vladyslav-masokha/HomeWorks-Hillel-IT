// let numberOfStudents, studentName;

// do {
// 	numberOfStudents = +prompt('How many students are in his class?');
// } while (numberOfStudents == '');

// function generateList() {
// 	let students = [];

// 	for (let i = 1; i <= numberOfStudents; ++i) {

// 		studentName = prompt('State the name of the student');

// 		const marks = [];
// 		for (let i = 0; i < 5; i++) {
// 			marks.push(Math.round(Math.random() * 12));
// 		}

// 		students = {
// 			name: studentName,
// 			marks: marks
// 		};
// 		console.log(students);
// 	}
// }

// generateList();









































do {
	chooseOperation = prompt(`Choose an operation:
1.best student
2.grade list
3.average mark
4.list of debtors
5.new student`
	);
} while (chooseOperation == '');
























const operation = +prompt(`Choose a number of operation:
1.best student
2.grade list
3.average mark
4.list of debtors
5.new student
`);
switch (operation) {
	case 1:
		console.log(1);
		break;
	case 2:
		console.log(2);
		break;
	case 3:
		console.log(3);
		break;
	case 4:
		console.log(4);
		break;
	default:
		console.log(5);
		break;
}


































do {
	
	generateList();

} while (confirm('Do you want to countinue'));


function generateList() {
	let students = [];

	for (let i = 1; i <= numberOfStudents; ++i) {

		studentName = prompt('State the name of the student');

		const marks = [];
		for (let i = 0; i < 5; i++) {
			marks.push(Math.round(Math.random() * 12));
		}

		students = {
			name: studentName,
			marks: marks
		};
		console.log(students);
	}
}