import React from 'react';

export class Header extends React.Component {
	render() {
		return (
			<header>
				<h1>Sup, {this.props.name}!</h1>
				<h2>Sup, {this.props.name}!</h2>
				<h3>Sup, {this.props.name}!</h3>
				<h4>Sup, {this.props.name}!</h4>
				<h5>Sup, {this.props.name}!</h5>
				<h6>Sup, {this.props.name}!</h6>
			</header>
		);
	}
}

Header.defaultProps = { name: 'Default Name' };
