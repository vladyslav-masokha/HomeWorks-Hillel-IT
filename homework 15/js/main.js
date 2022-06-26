(() => {
	'use strict';
	const calc = defaultNum => {
		let num2;
		return {
			add: function add(secNum) {
				return (num2 = defaultNum + secNum), console.log(num2);
			},
			sub: function sub(secNum) {
				return (num2 = defaultNum - secNum), console.log(num2);
			},
			div: function div(secNum) {
				return (num2 = defaultNum / secNum), console.log(num2);
			},
			mul: function mul(secNum) {
				return (num2 = defaultNum * secNum), console.log(num2);
			},
			getResult: function getResult() {
				return console.log(num2);
			},
		};
	};

	const first = calc(4);
	first.add(33);
	first.sub(12);
	first.div(2);
	first.mul(4);

	first.getResult();
})();
