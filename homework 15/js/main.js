(() => {
	'use strict';
	const calc = defaultNum => {
		return {
			add: function add(secNum) {
				return console.log((defaultNum += secNum));
			},
			sub: function sub(secNum) {
				return console.log((defaultNum -= secNum));
			},
			div: function div(secNum) {
				return console.log((defaultNum /= secNum));
			},
			mul: function mul(secNum) {
				return console.log((defaultNum *= secNum));
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
