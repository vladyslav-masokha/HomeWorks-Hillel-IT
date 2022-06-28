(() => {
	'use strict';
	const calc = defaultNum => {
		return {
			add: function add(secNum) {
				return (defaultNum += secNum), console.log(defaultNum);
			},
			sub: function sub(secNum) {
				return (defaultNum -= secNum), console.log(defaultNum);
			},
			div: function div(secNum) {
				return (defaultNum /= secNum), console.log(defaultNum);
			},
			mul: function mul(secNum) {
				return (defaultNum *= secNum), console.log(defaultNum);
			},
			getResult: function getResult() {
				return console.log(defaultNum);
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
