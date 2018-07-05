'use strict';

var appRoot = document.getElementById('app');

var app = {
	title: 'Doggy Love',
	subtitle: 'Amazing Pet Store',
	options: ['One', 'Two']
};

var user = {
	name: 'Evgeny',
	age: 26,
	location: 'Gdansk'
};

var getLocation = function getLocation(location) {
	if (location) {
		return React.createElement(
			'p',
			null,
			'Location: ',
			location
		);
	}
};

var templateTwo = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		user.name ? user.name : 'Anonymous'
	),
	user.age && user.age >= 18 && React.createElement(
		'p',
		null,
		'Age: ',
		user.age
	),
	getLocation(user.location)
);

var template = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		app.title
	),
	app.subtitle && React.createElement(
		'p',
		null,
		'app.subtitle'
	),
	React.createElement(
		'p',
		null,
		app.options.length > 0 ? 'Here are your options' : 'No options'
	),
	React.createElement(
		'ol',
		null,
		React.createElement(
			'li',
			null,
			'Item one'
		),
		React.createElement(
			'li',
			null,
			'Item Two'
		)
	)
);

ReactDOM.render(template, appRoot);
