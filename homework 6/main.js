'use strict';

function main() {
	let chooseOperation;
	do {
		do {
			chooseOperation = +prompt('Choose operation: \n1.Best student\n2.Referral list\n3.Avg mark\n4.List of debtors\n5.New student\n6.Generate random students');
		} while (typeof chooseOperation === "number" && Number.isNaN(chooseOperation) && chooseOperation != null && typeof chooseOperation !== undefined);
		switch (chooseOperation) {
			case 1:
				getBestStudent(myStudents);
				break;
			case 2:
				getReferralList(myStudents);
				break;
			case 3:
				getAvgMark(myStudents);
				break;
			case 4:
				getListOfDebtors(myStudents);
				break;
			case 5:
				addNewStudent(myStudents);
				break;
			case 6:
				getRandomStudent();
				break;
			default:
				alert('Wrong operation, repeat please!');
		}
	} while (confirm('Do you want to countinue'));
}
main();