const square = function(x) {
	return x * x;
};

console.log(square(8));

const squareArrow = (x) => x * x;

console.log(squareArrow(9));

let fullName = 'Adrienne Kasian';

const getFullName = (name) => name.split(' ')[0];

console.log(getFullName(fullName));
