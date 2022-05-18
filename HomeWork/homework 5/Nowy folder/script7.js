// //  Main
// function main() {
// 	// let numberOfStudents = generateList(+prompt('How many students in your group?'));	
// 	do {

// 		// Choose opration
// 		do {
// 			const chooseOperation = +prompt(`Choose a number of operation:
// 1.best student
// 2.grade list
// 3.average mark
// 4.list of debtors
// 5.new student
// `);
// 			switch (chooseOperation) {
// 				case 1:
// 					console.log(1);
// 					break;
// 				case 2:
// 					console.log(2);
// 					break;
// 				case 3:
// 					console.log(3);
// 					break;
// 				case 4:
// 					console.log(4);
// 					break;
// 				default:
// 					console.log(5);
// 					break;
// 			}
// 		} while (chooseOperation == '');


// 	} while (confirm('Do you want to countinue'));
// }

// main()

// // Generate students
// // function generateList() {
// // 	let students = [];

// // 	for (let i = 1; i <= numberOfStudents; ++i) {

// // 		studentName = prompt('State the name of the student');

// // 		const marks = [];
// // 		for (let i = 0; i < 5; i++) {
// // 			marks.push(Math.round(Math.random() * 12));
// // 		}

// // 		students = {
// // 			name: studentName,
// // 			marks: marks
// // 		};
// // 		console.log(students);
// // 	}
// // }


// // Marks
// let DEFAULT_MARKS_AMOUNT = 5;
// function getRandomMarks() {
// 	const marks = [];
// 	for (let i = 0; i < DEFAULT_MARKS_AMOUNT; i++) {
// 		marks.push(Math.round(Math.random() * 12));
// 	}
// 	return marks;
// }


// // // Best student
// // function getBestStudent(students) { // [{ name: 'John', marks: [10,12, 4, 6], avgMark: 8.7 }, ...]
// // 	let bestStudent = students[0];
// // 	for (let i = 1; i < students.length; i++) {
// // 		if (bestStudent.avg < students[i].avgMark) {
// // 			bestStudent = students[i];
// // 		}
// // 	}
// // 	console.log(bestStudent);
// // 	return bestStudent;
// // }






















function generateStudents (amount) {
	const students = [];

	for (let i = 0; i < amount; i++) {
		students[i] = {
			name: prompt('Enter student name'),
			marks: getRandomMarks()
		}
	}

	return students;
}
generateStudents();