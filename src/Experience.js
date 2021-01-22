import React from 'react';
import './Experience.css';
// import ReactDOM from 'react-dom';

export class Experience extends React.Component {
	render() {
		return (
			<div id="experience">
				<h2>Experience</h2>
				<section>
					<div className="entry">
						<div className="date">date</div>
						<div className="position">position</div>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
							eum deleniti doloremque facere accusantium provident aspernatur
							non, a fuga repudiandae debitis veniam perferendis eius libero
							iusto rem porro perspiciatis minima!
						</p>
					</div>
				</section>
			</div>
		);
	}
}
