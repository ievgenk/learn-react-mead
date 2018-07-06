class IndecisionApp extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<Action />
				<Options />
				<AddOptions />
			</div>
		);
	}
}

class Header extends React.Component {
	render() {
		return (
			<div>
				<h1>Indecision App</h1>
				<h2>Put your life in the hands of the computer</h2>
			</div>
		);
	}
}

class Action extends React.Component {
	render() {
		return (
			<div>
				<button>What should I do?</button>
			</div>
		);
	}
}

class Options extends React.Component {
	render() {
		return (
			<div>
				<p>Options Component</p>
				<Option />
			</div>
		);
	}
}

class Option extends React.Component {
	render() {
		return <div>Option Component Here</div>;
	}
}

class AddOptions extends React.Component {
	render() {
		return (
			<div>
				<p>addOptions Component</p>
			</div>
		);
	}
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

// // babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
