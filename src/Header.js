import React from 'react';

export class Header extends React.Component {
	render() {
		return (
			<header>
				<section>
					<span className="role">Developer + Designer</span>
					<h1 className="name">Louie Camacho</h1>
				</section>
				<section>
					<span className="profile">profile</span>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nam tempora, sed corporis, cupiditate et natus sint inventore ad ex tenetur provident perferendis nostrum autem ducimus error beatae explicabo unde.</p>
				</section>
			</header>
		);
	}
}

Header.defaultProps = { name: 'Default Name' };
