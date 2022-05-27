const DEFAULT_MARKS_AMOUNT = 5;
const numberStudents = +prompt('How many students in your group?');

// Working - function for sum
function sum(x) {
	let a = 0;
	for (let i = 0; i < x.length; i++) {
		a = a + x[i];
	}
	return a;
}


// Working - function for get student list
function getStudentsList() {
	const student = [];
	for (let i = 0; i < numberStudents; i++) {
		student[i] = {
			name: prompt(`Enter ${i+1} student name`),
			marks: getRandomMarks(),
			avgMark: sum(getRandomMarks()) / getRandomMarks().length,
		};
	}
	return student;
}
const myStudents = getStudentsList();


// Working - function for get random marks
function getRandomMarks() {
	const marks = [];
	let enteredMark, comaMarks, result;
	let chooseOperation = +prompt('Choose operation: \n1.Conduct assessments independently\n2.Random marks');
	if (chooseOperation === 1) {
		enteredMark = prompt('Write 5 marks through a comma!');
		comaMarks = enteredMark.split(',');
		result = comaMarks.map(element => +element);
		marks.push(result);
	} else if (chooseOperation === 2) {
		for (let i = 0; i < DEFAULT_MARKS_AMOUNT; i++) {
			marks.push(Math.round(Math.random() * 12));
		}
	} else {
		alert('Wrong operation!');
	}
	return marks;
}


// 1
// Working - function for get best student
function getBestStudent(student) {
	const bestMark = student.slice(0);

	bestMark.sort(function (a, b) {
		return a.avgMark - b.avgMark;
	});

	const bestStudent = bestMark[bestMark.length - 1];
	console.log(`Best student: `, bestStudent);
}


// 2
// Preparing
function getReferralList(student) {
	for (let i = 0, endI = student.length - 1; i < endI; i++) {
		const wasSwap = false;
		for (let j = 0, endJ = endI - i; j < endJ; j++) {
			if (student[j] > student[j + 1]) {
				[student[j], student[j + 1]] = [student[j + 1], student[j]];
				wasSwap = true;
			}
		}
		if (!wasSwap) break;
	}
	console.log(student);
	return student;
}


// 3
// Working - function for average marks
function getAvgMark(student) {
	for (let i = 0; i < numberStudents; i++) {
		let average = student[i].marks;
		student[i].avgMark = sum(average) / average.length;
	}
	console.log(student);
	return student;
}


// 4
// Preparing
function getListOfDebtors(student) {
	let debtors;
	for (let i = 0; i < 1; i++) {
		debtors = student[i].avgMark;

		if (debtors < 5) {
			console.log(student[0]);
		} else {
			console.log('There are no debtors on this list.');
		}
	}
	return debtors;
}


// 5
// Working - function for new student
function addNewStudent(student) {
	let commandFive = +prompt('How many students would you like to add?');
	for (let i = numberStudents; i < numberStudents + commandFive; i++) {
		student[i] = {
			name: prompt(`Enter ${i+1} student name`),
			marks: getRandomMarks(),
			avgMark: sum(getRandomMarks()) / getRandomMarks().length,
		};
	}
	console.log(student);
	return student;
}


// 6
// Working - function for get random student
function getRandomStudent() {
	let amountOfStudents;
	const list = [];
	do {
		amountOfStudents = +prompt('How many students to generate?');
	} while (typeof amountOfStudents === "number" && Number.isNaN(amountOfStudents) && amountOfStudents != null && typeof amountOfStudents !== undefined);

	for (let i = 0; i < amountOfStudents; i++) {
		list.push({
			name: studentsMock.getStudent(),
		});
	}

	console.log(list);
	return list;
}