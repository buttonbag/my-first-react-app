import React from 'react';
import './footer.css';

export class Footer extends React.Component {
	render() {
		return (
			<footer>
				<section>
					<h2 className="title">Education</h2>
					<ul>
						<li>date</li>
						<li>degree</li>
						<li>school</li>
					</ul>
				</section>
				<section>
					<h2 className="title">interests</h2>
					<ul>
						<li>item</li>
						<li>item</li>
						<li>item</li>
						<li>item</li>
					</ul>
				</section>
				<section>
					<h2 className="title">contact</h2>
					<ul>
						<li>email</li>
						<li>phone</li>
					</ul>
					<ul>
						<li>links</li>
						<li>links</li>
						<li>links</li>
					</ul>
				</section>
			</footer>
		);
	}
}
