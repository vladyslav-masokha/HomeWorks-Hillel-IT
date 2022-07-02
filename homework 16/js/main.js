function Hamburger(toppings) {
	this.SIZE_SMALL = {
		price: 50,
		collories: 20,
	};

	this.SIZE_MEDIUM = {
		price: 75,
		collories: 30,
	};

	this.SIZE_BIG = {
		price: 100,
		collories: 40,
	};

	toppings = {
		TOPPING_MAYO: {
			updatePriceSmall: (this.SIZE_SMALL.price += 20),
			updatePriceMedium: (this.SIZE_MEDIUM.price += 20),
			updatePriceBig: (this.SIZE_BIG.price += 20),

			updateColloriesSmall: (this.SIZE_SMALL.collories += 5),
			updateColloriesMedium: (this.SIZE_MEDIUM.collories += 5),
			updateColloriesBig: (this.SIZE_BIG.collories += 5),
		},

		TOPPING_CHEESE: {
			updatePriceSmall: (this.SIZE_SMALL.price += 10),
			updatePriceMedium: (this.SIZE_MEDIUM.price += 10),
			updatePriceBig: (this.SIZE_BIG.price += 10),

			updateColloriesSmall: (this.SIZE_SMALL.collories += 20),
			updateColloriesMedium: (this.SIZE_MEDIUM.collories += 20),
			updateColloriesBig: (this.SIZE_BIG.collories += 20),
		},

		TOPPING_SALAD: {
			updatePriceSmall: (this.SIZE_SMALL.price += 20),
			updatePriceMedium: (this.SIZE_MEDIUM.price += 20),
			updatePriceBig: (this.SIZE_BIG.price += 20),

			updateColloriesSmall: (this.SIZE_SMALL.collories += 5),
			updateColloriesMedium: (this.SIZE_MEDIUM.collories += 5),
			updateColloriesBig: (this.SIZE_BIG.collories += 5),
		},

		TOPPING_SEASONING: {
			updatePriceSmall: (this.SIZE_SMALL.price += 15),
			updatePriceMedium: (this.SIZE_MEDIUM.price += 15),
			updatePriceBig: (this.SIZE_BIG.price += 15),

			updateColloriesSmall: (this.SIZE_SMALL.collories += 0),
			updateColloriesMedium: (this.SIZE_MEDIUM.collories += 0),
			updateColloriesBig: (this.SIZE_BIG.collories += 0),
		},

		TOPPING_POTATO: {
			updatePriceSmall: (this.SIZE_SMALL.price += 15),
			updatePriceMedium: (this.SIZE_MEDIUM.price += 15),
			updatePriceBig: (this.SIZE_BIG.price += 15),

			updateColloriesSmall: (this.SIZE_SMALL.collories += 10),
			updateColloriesMedium: (this.SIZE_MEDIUM.collories += 10),
			updateColloriesBig: (this.SIZE_BIG.collories += 10),
		},
	};

	this.addTopping = () => {
		return toppings;
	};

	this.getPrice = () => {
		return {
			SIZE_SMALL: this.SIZE_SMALL.price,
			SIZE_MEDIUM: this.SIZE_MEDIUM.price,
			SIZE_BIG: this.SIZE_BIG.price,
		};
	};

	this.getCallories = () => {
		return {
			SIZE_SMALL: this.SIZE_SMALL.collories,
			SIZE_MEDIUM: this.SIZE_MEDIUM.collories,
			SIZE_BIG: this.SIZE_BIG.collories,
		};
	};
}

const hamburger = new Hamburger();
// Small burger
console.group('Small burger');
hamburger.addTopping().TOPPING_MAYO;
console.log('Price with sauce: ' + hamburger.getPrice().SIZE_SMALL);
console.log('Callories with sauce: ' + hamburger.getCallories().SIZE_SMALL);
console.groupEnd();

// Medium burger
console.group('Medium burger');
hamburger.addTopping().TOPPING_MAYO.updatePriceMedium;
console.log('Price with sauce: ' + hamburger.getPrice().SIZE_MEDIUM);
console.log('Callories with sauce: ' + hamburger.getCallories().SIZE_MEDIUM);
console.groupEnd();

// Big burger
console.group('Big burger');
hamburger.addTopping().TOPPING_MAYO.updatePriceBig;
console.log('Price with sauce: ' + hamburger.getPrice().SIZE_BIG);
console.log('Callories with sauce: ' + hamburger.getCallories().SIZE_BIG);
console.groupEnd();
