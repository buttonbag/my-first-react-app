import React from 'react';

class Header extends React.Component {
	render() {
		const { name, linkText, linkSrc } = this.props; //destructuring props (es6) same as this.props.[prop]
		return (
			<div className="header">
				<h1 className="name">{name}</h1>

				<div className="contact">
					<a href={linkSrc}>{linkText}</a>
					<span className="social">
						<a href="https://github.com/buttonbag">
							<i className="fab fa-github"></i>
						</a>
						<a href="https://codepen.io/buttonbag">
							<i className="fab fa-codepen"></i>
						</a>
						<a href="https://www.linkedin.com/in/louiecamacho/">
							<i className="fab fa-linkedin"></i>
						</a>
						<a href="https://twitter.com/iambuttonbag">
							<i className="fab fa-twitter"></i>
						</a>
					</span>
					<a href="mailto:louiecamacho@gmail.com">louieCamacho@gmail.com</a>
					<span>773.952.0534</span>
				</div>
			</div>
		);
	}
}

export default Header;
