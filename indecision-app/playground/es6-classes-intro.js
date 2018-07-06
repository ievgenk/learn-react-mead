class Person {
	constructor(name = 'Annonymous', age = 0) {
		this.name = name;
		this.age = age;
	}
	getGreeting() {
		console.log(`Hey there ${this.name}`);
	}
	getDescription() {
		return `Name: ${this.name} and he/she is ${this.age} old.`;
	}
}

class Student extends Person {
	constructor(name, age, major) {
		super(name, age);
		this.major = major;
	}
	hasMajor() {
		return !!this.major;
	}

	getDescription() {
		let description = super.getDescription();

		if (this.hasMajor()) {
			description += ` Their major is: ${this.major}`;
		}

		return description;
	}
}

class Traveler extends Person {
	constructor(name, age, homeLocation) {
		super(name, age);
		this.homeLocation = homeLocation;
	}
	getGreeting() {
		let greeting = super.getGreeting();
		if (this.homeLocation) {
			greeting += ` I am located at ${this.homeLocation}`;
		}
		return greeting;
	}
}

let me = new Traveler('Evgeny', 26, 'Denver');

console.log(me.getGreeting());
