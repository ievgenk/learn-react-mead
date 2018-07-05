let appRoot = document.getElementById('app');
let count = 0;

const renderCounterApp = () => {
	let templateTwo = (
		<div>
			<h1>Count: {count}</h1>
			<button onClick={addOne}>+1</button>
			<button onClick={minusOne}>-1</button>
			<button onClick={resetFunction}>Reset</button>
		</div>
	);

	ReactDOM.render(templateTwo, appRoot);
};

const addOne = () => {
	count++;
	renderCounterApp();
	console.log('addOne');
};
const minusOne = () => {
	count--;
	renderCounterApp();
	console.log('minusOne');
};
const resetFunction = () => {
	count = 0;
	renderCounterApp();
	console.log('Reset');
};

renderCounterApp();
