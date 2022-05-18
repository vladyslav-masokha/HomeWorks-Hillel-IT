const students = [];

let numberOfStudents, studentName;

// console.log(typeof numberOfStudents);
// console.log(numberOfStudents);
function generateList(numberOfStudents) {

	do {

		do {
			numberOfStudents = +prompt('How many students are in his class?');
		} while (numberOfStudents !== numberOfStudents);

		while (numberOfStudents != numberOfStudents || numberOfStudents == '') {

		}
		do {
			studentName = prompt('State the name of the student');
		} while (studentName == '');

		if (studentName != studentName) {
			console.log('Error, you entered the wrong name!');
		} else {
			while (numberOfStudents = 1) {
				students[0] = {
					name: studentName,
					marks: [Math.floor(Math.random() * 12)]
				}

				console.log(students);
				return;
			}

			while (numberOfStudents = 2) {
				students[0] = {
					name: studentName,
					marks: [Math.floor(Math.random() * 12)]
				}
				students[1] = {
					name: "2",
					marks: [Math.floor(Math.random() * 12)]
				}
			}
		}

	} while (numberOfStudents >= 10);

}

generateList();
// console.log('Error, you entered the wrong name!');
// prompt('State the name of the student');
// console.log(students);