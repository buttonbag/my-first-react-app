import React from 'react';
// import ReactDOM from 'react-dom';

const green = '#39D1B4';
const yellow = '#FFD712';

export class Body extends React.Component {
	constructor(props) {
		super(props);
		this.state = { color: green };
		this.changeColor = this.changeColor.bind(this);
	}

	changeColor() {
		const newColor = this.state.color === yellow ? green : yellow;
		this.setState({ color: newColor });
	}

	render() {
		return (
			<section style={{ background: this.state.color }}>
				<p>This is a section!!!!</p>
				<button onClick={this.changeColor}>Change color</button>
			</section>
		);
	}
}
