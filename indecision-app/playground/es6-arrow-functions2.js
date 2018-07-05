const user = {
	name: 'Evgeny',
	cities: [ 'Cambridge', 'Vancouver', 'Nottingham' ],
	printPlacesLived() {
		return this.cities.map((city) => `${this.name} has lived in ${city}`);
	}
};

console.log(user.printPlacesLived());

const multiplier = {
	numbers: [ 1, 2, 6 ],
	multiplyBy: 2,
	multiply() {
		return this.numbers.map((num) => num * this.multiplyBy);
	}
};

console.log(multiplier.multiply());
