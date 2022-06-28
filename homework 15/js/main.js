(() => {
	'use strict';
	const calc = defaultNum => {
		return {
			add: function add(secNum) {
				console.log((defaultNum += secNum));
			},
			sub: function sub(secNum) {
				console.log((defaultNum -= secNum));
			},
			div: function div(secNum) {
				console.log((defaultNum /= secNum));
			},
			mul: function mul(secNum) {
				console.log((defaultNum *= secNum));
			},
			getResult: function getResult() {
				console.log(defaultNum);
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
