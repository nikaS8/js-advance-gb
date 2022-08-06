const size = {
	small: {
		name:"small",
		price: 50,
		calories: 20
	},
	big: {
		name:"big",
		price: 100,
		calories: 40
	}
};

const stuffing = {
	cheese: {
		name:"cheese",
		price: 10,
		calories: 20
	},
	salat: {
		name: "salat",
		price: 20,
		calories: 5
	},
	potato: {
		name: "potato",
		price: 15,
		calories: 10
	}
};

const topping = {
	spice: {		
		name:"spice",
		price: 15,
		calories: 0
	},
	mayo: {
		name:"mayo",		
		price: 20,
		calories: 5
	}
}

class Hamburger {
	constructor(size, stuffing) {
		this.size = size;
		this.stuffing = stuffing;
		this.total = [];
		console.log(`You choose ${this.size.name} burger with ${this.stuffing.name}`)
	};

	addTopping(toppingName) {
		if(toppingName === topping.spice.name) {
			this.total.push(topping.spice);
			console.log(`We add ${toppingName} to your burger!`);
		} 
		else if(toppingName === topping.mayo.name) {
			this.total.push(topping.mayo)
			console.log(`We add ${toppingName} to your burger!`);			
		} 
		else {
			console.log(`We don't have this topping`);
		}
	}

	removeTopping(toppingName) {
		let found = false;
		for(let i = 0; i < this.total.length; i++) {
			if(this.total[i].name === toppingName){
				this.total.splice(i, 1);
				found = true;
				console.log(`We remove ${toppingName} from your burger!`);
			}
		}
		if(found === false) {
			console.log(`You don't have this topping`);
		}
	};

	getToppings(topping) {
		console.log(`You can add extra 
		${topping.spice.name} for ${topping.spice.price}y.e and ${topping.spice.calories} calories or
		${topping.mayo.name} for ${topping.mayo.price}y.e and ${topping.mayo.calories} calories`)
	};

	getSize() {		
		console.log(`You have ${this.size.name} size burger`);
	};

	getStuffing() {
		console.log(`You have burger with ${this.stuffing.name}`);
	};

	calculatePrice() {
		let sum = 0;
		this.total.forEach(item => sum += item.price);
		sum += this.size.price + this.stuffing.price;
		console.log(`Your total price is ${sum}`);
	};

	calculateCalories() {
		let sum = 0;
		this.total.forEach(item => sum += item.calories);
		sum += this.size.calories + this.stuffing.calories;
		console.log(`The amount of calories is ${sum}`);
	};
	
}

let burger = new Hamburger(size.small, stuffing.cheese);
burger.getToppings(topping);
burger.getSize();
burger.getStuffing();
burger.calculatePrice();
burger.addTopping('mayo');
burger.addTopping('spice');
burger.removeTopping('mayo');
burger.calculatePrice();
burger.calculateCalories();

