const STORE = {
	visible: false
};

const toggleVisibility = () => {
	if (STORE.visible) {
		STORE.visible = false;
	} else {
		STORE.visible = true;
	}
	render();
};

const render = () => {
	const reactDiv = document.getElementById('app');

	let template = (
		<div>
			<h1>Visibility Toggle</h1>
			<button onClick={toggleVisibility}>{STORE.visible ? 'Hide Details' : 'Show Details'}</button>
			{STORE.visible && <p>Visible Info</p>}
		</div>
	);

	ReactDOM.render(template, reactDiv);
};

render();
