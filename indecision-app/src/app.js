const app = {
	title: 'Indecision App',
	subtititle: 'Put your life in the hands of the computer',
	options: []
};

const removeAll = () => {
	app.options = [];
	renderForm();
};

const onMakeDecision = () => {
	const randomNum = Math.floor(Math.random() * app.options.length + 1);
	const options = app.options[randomNum];
	alert(options);
};

const renderForm = () => {
	const template = (
		<div>
			<h1>{app.title}</h1>
			{app.subtititle && <p>{app.subtitle}</p>}
			<p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
			<button disabled={app.options.length === 0} onClick={onMakeDecision}>
				What Should I Do?
			</button>
			<button onClick={removeAll}>Remove All</button>
			<ol>{app.options.map((item) => <li key={item}>Item: {item}</li>)}</ol>
			<form onSubmit={onFormSubmit}>
				<input type="text" name="option" />
				<button>Add Option</button>
			</form>
		</div>
	);

	ReactDOM.render(template, appRoot);
};

const onFormSubmit = (event) => {
	event.preventDefault();
	console.log('Form submitted');
	const option = event.target.elements.option.value;

	if (option) {
		app.options.push(option);
		event.target.elements.option.value = '';
		renderForm();
	}
};

let appRoot = document.getElementById('app');

renderForm();
