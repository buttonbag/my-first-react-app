import React from 'react';

class Header extends React.Component {
	render() {
		const { name, linkText, linkSrc } = this.props; //destructuring props (es6) same as this.props.[prop]

		// build social links and icons as objects
		const socialLinks = [
			{
				link: 'https://github.com/buttonbag',
				icon: 'fab fa-github',
			},
			{
				link: 'https://codepen.io/buttonbag',
				icon: 'fab fa-codepen',
			},
			{
				link: 'https://www.linkedin.com/in/louiecamacho/',
				icon: 'fab fa-linkedin',
			},
			{
				link: 'https://twitter.com/iambuttonbag',
				icon: 'fab fa-twitter',
			},
		];

		// map through each social media links and icons
		const socLinksLoop = socialLinks.map((soc) => {
			return (
				<a href={soc.link} key={soc.link}>
					<li className={soc.icon}></li>
				</a>
			);
		});

		return (
			<div className="header">
				<h1 className="name">{name}</h1>

				<div className="contact">
					<a href={linkSrc}>{linkText}</a>
					<span className="social">{socLinksLoop}</span>
					<a href="mailto:louiecamacho@gmail.com">louieCamacho@gmail.com</a>
					<span>773.952.0534</span>
				</div>
			</div>
		);
	}
}

export default Header;
