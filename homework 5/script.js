'use strict';
const numberStudents = +prompt('How many students in your group?');
let students = [];
const DEFAULT_MARKS_AMOUNT = 5;

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
	for (let i = 0; i < DEFAULT_MARKS_AMOUNT; i++) {
		marks.push(Math.round(Math.random() * 12));
	}
	return marks;
}

// getListStudents
function getListStudents() {
	const students = [];
	let studentName;
	for (let i = 0; i < numberStudents; i++) {
		studentName = prompt('State the name of the student');
		students[i] = {
			name: studentName,
			marks: getRandomMarks()
		};
	}
	return students;
}
getListStudents(numberStudents);

// getBestStudent
function getBestStudent() {
	const bestMark = students.slice(0);

	bestMark.sort(function (a, b) {
		return a.avgMark - b.avgMark;
	});

	const bestStudent = bestMark[bestMark.length - 1];
	console.log(bestStudent);
}

// getReferralList
// function getReferralList() {
// 	for (let i = 0, endI = students.length - 1; i < endI; i++) {
// 		let wasSwap = false;
// 		for (let j = 0, endJ = endI - i; j < endJ; j++) {
// 			if (students[j] > students[j + 1]) {
// 				[students[j], students[j + 1]] = [students[j + 1], students[j]];
// 				wasSwap = true;
// 			}
// 		}
// 		if (!wasSwap) break;
// 	}
// 	return students;
// }


// getAvgMark
function getAvgMark() {
	for (let i = 0; i < numberStudents; i++) {
		let average = students[i].marks;
		students[i].avgMark = sum(average) / average.length;
	}
}

// 5
// getListOfDebtors
// function getListOfDebtors() {
// 	for (let i = 0; i < numberStudents; i++) {
// 		let debtors = students[i].avgMark;

// 	if (debtors < 5) {
// 		console.log(students[0]);
// 	} else {
// 		console.log('There are no debtors on this list.');
// 	}
// 	return debtors;
// }

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

// Main
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
