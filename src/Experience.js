import React from 'react';
import './Experience.css';
// import ReactDOM from 'react-dom';

const entry = [
	{
		date: 'date 1',
		position: 'position 1',
		description:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum sequi placeat ex dignissimos fuga deleniti commodi tenetur eos minima, dolor, quis error facilis nobis amet asperiores pariatur molestiae ipsum quo?',
	},
	{
		date: 'date 2',
		position: 'position 2',
		description:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum sequi placeat ex dignissimos fuga deleniti commodi tenetur eos minima, dolor, quis error facilis nobis amet asperiores pariatur molestiae ipsum quo?',
	},
	{
		date: 'date 3',
		position: 'position 3',
		description:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum sequi placeat ex dignissimos fuga deleniti commodi tenetur eos minima, dolor, quis error facilis nobis amet asperiores pariatur molestiae ipsum quo?',
	},
];

export class Experience extends React.Component {
	entries = entry.map((work, index) => {
		return (
			<section key={index}>
				<div className="entry" key={index}>
					<div className="date" key={work.date.index}>
						{work.date}
					</div>
					<div className="position" key={work.position.index}>
						{work.position}
					</div>
					<p key={work.description.index}>{work.description}</p>
				</div>
			</section>
		);
	});

	render() {
		return (
			<div id="experience">
				<h2>Experience</h2>
				{this.entries}
			</div>
		);
	}
}
