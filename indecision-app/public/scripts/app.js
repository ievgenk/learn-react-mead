'use strict';

var app = {
	title: 'Indecision App',
	subtititle: 'Put your life in the hands of the computer',
	options: []
};

var removeAll = function removeAll() {
	app.options = [];
	renderForm();
};

var onMakeDecision = function onMakeDecision() {
	var randomNum = Math.floor(Math.random() * app.options.length + 1);
	var options = app.options[randomNum];
	alert(options);
};

var renderForm = function renderForm() {
	var template = React.createElement(
		'div',
		null,
		React.createElement(
			'h1',
			null,
			app.title
		),
		app.subtititle && React.createElement(
			'p',
			null,
			app.subtitle
		),
		React.createElement(
			'p',
			null,
			app.options.length > 0 ? 'Here are your options' : 'No options'
		),
		React.createElement(
			'button',
			{ disabled: app.options.length === 0, onClick: onMakeDecision },
			'What Should I Do?'
		),
		React.createElement(
			'button',
			{ onClick: removeAll },
			'Remove All'
		),
		React.createElement(
			'ol',
			null,
			app.options.map(function (item) {
				return React.createElement(
					'li',
					{ key: item },
					'Item: ',
					item
				);
			})
		),
		React.createElement(
			'form',
			{ onSubmit: onFormSubmit },
			React.createElement('input', { type: 'text', name: 'option' }),
			React.createElement(
				'button',
				null,
				'Add Option'
			)
		)
	);

	ReactDOM.render(template, appRoot);
};

var onFormSubmit = function onFormSubmit(event) {
	event.preventDefault();
	console.log('Form submitted');
	var option = event.target.elements.option.value;

	if (option) {
		app.options.push(option);
		event.target.elements.option.value = '';
		renderForm();
	}
};

var appRoot = document.getElementById('app');

renderForm();
