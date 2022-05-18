const numberOfStudents = +prompt('How many students are in his class?');
let students = [];

// students[0].name = prompt('Enter the name and surname!');
// students[0].name = prompt('Enter the name and surname!');







// Generate list students
function generateList(numberOfStudents) {
	do {
		students.name = prompt('Enter the name and surname!');

		for(let i = 0; i > students.length; i ++) {
			students = {
				marks: [Math.floor(Math.random() * 12)]
			}
			console.log(students);
		}

		console.log(students);
		

	} while (numberOfStudents >= students.length);
}

generateList();











// console.log(generateList(students));

// function generateList(numberOfStudents) { }
// function bestStudent(students) { }
// function gradeList(students) { }
// function averageMark(students) { }
// function listOfDebtors(students) { }
// function newStudent(students) { }

students = {
	name: 'John Doe',
	marks: [Math.floor(Math.random() * 12)]
},
{
	name: 'Vlad Pabl',
	marks: Math.floor(Math.random() * 12)
},
{
	name: '',
	marks: Math.floor(Math.random() * 12)
},
{
	name: '',
	marks: Math.floor(Math.random() * 12)
};
// return students.map(
// 	({ name, marks }) => ({ name,marks })
// );

// console.log(generateList(students));
