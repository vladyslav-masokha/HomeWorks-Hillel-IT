function Burger(size, toppings = []) {
	this.size = size;
	this.toppings = toppings;

	this.getPrice = () => {
		return this.toppings.reduce(
			(price, topping) => price + topping.price,
			this.size.price
		);
	};

	this.getCallories = () => {
		return this.toppings.reduce(
			(kcal, topping) => kcal + topping.kcal,
			this.size.kcal
		);
	};

	this.burgerInfo = () => {
		console.log(`
-----------------
BURGER SIZE: ${this.size.name}
PRICE: $${this.getPrice()}
CALLORIES: ${this.getCallories()} kcal
TOPPINGS: ${toppings.map(e => e.name).join(', ')}
-----------------

`);
	};

	this.addTopping = topping => {
		this.toppings.push(topping);
	};
}

Burger.BURGER_SIZE = {
	SMALL: {
		name: 'Small',
		price: 50,
		kcal: 20,
	},
	MEDIUM: {
		name: 'Medium',
		price: 75,
		kcal: 30,
	},
	BIG: {
		name: 'Big',
		price: 100,
		kcal: 40,
	},
};

Burger.TOPPINGS = {
	CHEESE: {
		name: 'CHEESE',
		price: 10,
		kcal: 20,
	},
	SALAD: {
		name: 'SALAD',
		price: 20,
		kcal: 5,
	},
	POTATO: {
		name: 'POTATO',
		price: 20,
		kcal: 5,
	},
	SEASONING: {
		name: 'SEASONING',
		price: 15,
		kcal: 0,
	},
	MAYO: {
		name: 'MAYO',
		price: 20,
		kcal: 5,
	},
};

const smallBurger = new Burger(Burger.BURGER_SIZE.SMALL);
smallBurger.addTopping(Burger.TOPPINGS.MAYO);
smallBurger.addTopping(Burger.TOPPINGS.CHEESE);
smallBurger.burgerInfo();

const mediumBurger = new Burger(Burger.BURGER_SIZE.MEDIUM);
mediumBurger.addTopping(Burger.TOPPINGS.MAYO);
mediumBurger.addTopping(Burger.TOPPINGS.CHEESE);
mediumBurger.addTopping(Burger.TOPPINGS.POTATO);
mediumBurger.burgerInfo();

const bigBurger = new Burger(Burger.BURGER_SIZE.BIG);
bigBurger.addTopping(Burger.TOPPINGS.MAYO);
bigBurger.addTopping(Burger.TOPPINGS.CHEESE);
bigBurger.addTopping(Burger.TOPPINGS.POTATO);
bigBurger.addTopping(Burger.TOPPINGS.SALAD);
bigBurger.addTopping(Burger.TOPPINGS.SEASONING);
bigBurger.burgerInfo();
