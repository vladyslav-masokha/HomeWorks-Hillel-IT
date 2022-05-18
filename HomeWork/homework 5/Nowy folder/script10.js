const numberStudents = +prompt('How many students in your group?');
let students = [];

// Sum
function sum(x) {
	let a = 0;
	for (let i = 0; i < x.length; i++) {
		a = a + x[i];
	}
	return a;
}

// Marks
function getRandomMarks() {
	const marks = [];
	const DEFAULT_MARKS_AMOUNT = 5;
	for (let i = 0; i < DEFAULT_MARKS_AMOUNT; i++) {
		marks.push(Math.round(Math.random() * 12));
	}
	return marks;
}

// 1
// getListStudents
function getListStudents() {
	let studentName;
	for (let i = 0; i < numberStudents; i++) {
		studentName = prompt('State the name of the student');
		students[i] = {
			name: studentName,
			marks: getRandomMarks(),
			avgMark: sum(getRandomMarks()) / getRandomMarks().length
		};
	}
	return students;
}
getListStudents(numberStudents);


// 2
// getBestStudent
function getBestStudent() {
	let bestStudent = students.slice(0);

	bestStudent.sort(function (a, b) {
		return a.avgMark - b.avgMark;
	});
	return numberStudents;
}


// 3
// getReferralList
function getReferralList() {
	let avgMark = students.slice(0);
	avgMark.sort(function (a, b) {
		return a.num - b.num;
	});
	console.log(avgMark);
}
// getReferralList(students);

// 4
// getAvgMark
// ------ NOT WORKING ------
function getAvgMark() {
	for (let key in students) {

	}
}

// 5
// getListOfDebtors
function getListOfDebtors() {}


// 6
// getNewStudent
function getNewStudent() {
	let studentName;
	let commandFive = +prompt('How many students would you like to add?');
	for (let i = numberStudents; i < numberStudents + commandFive; i++) {
		studentName = prompt('State the name of the student');
		students[i] = {
			name: studentName,
			marks: getRandomMarks(),
			avgMark: sum(getRandomMarks()) / getRandomMarks().length
		};
	}
	return students;
}











function main() {
	let chooseOperation;

	do {

		do {
			chooseOperation = +prompt('Choose operation: \n1.Best student\n2.Referral list\n3.Avg mark\n4.List of debtors\n5.New student');
		} while (typeof chooseOperation === "number" && Number.isNaN(chooseOperation) && chooseOperation != null && typeof chooseOperation !== undefined);

		switch (chooseOperation) {
			case 1:
				getBestStudent(students);
				break;
			case 2:
				getReferralList(students);
				break;
			case 3:
				getAvgMark(students);
				break;
			case 4:
				getListOfDebtors(students);
				break;
			case 5:
				getNewStudent(students);
				break;
		}

	} while (confirm('Do you want to countinue'));

}
main();












// use slice() to copy the array and not just make a reference

// byDate.sort(function (a, b) {
// 	return a.avgMark - b.avgMark;
// });
// console.log(byDate);