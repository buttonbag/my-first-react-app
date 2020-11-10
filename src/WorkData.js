import React, { Component } from 'react';

/* class WorkData extends Component {
	render() {
		const workData = [
			{
				name: 'Ogilvy & Mather',
				position: 'Front End Developer',
				year: '2015 - Present',
				description:
					'Developed, managed content and maintained HTML5 ads using GSAP Javascript library. Built responsive e-mail templates, created animated videos for Social Ads. Assisted in design and layout development. Trained the dev team in all aspects of development, including Git.',
			},
			{
				name: 'Staples/quill',
				position: 'Front End Developer',
				year: '2014 - 2015',
				description:
					'Designed, developed and maintained Wordpress pages. Created static banners for use on quill.com. Built a responsive email template used for all future email campaigns.',
			},
			{
				position: 'Web Designer & Developer',
				name: 'Media Made Great',
				year: '2010 - 2014',
				description:
					'Created and maintained the company’s website. Client work included websites, landing pages, and email marketing campaigns. Primarily hand coded HTML5, CSS3 and Javascript. Other responsibilities include production work and layout design.',
			},
		];

		// map through each social media links and icons
		const workDataLoop = workData.map((work, index) => {
			return (
				<div className="work-card" key={index}>
					<div className="work-header" key={index}>
						<div className="position" key={index.position}>
							{work.position}
						</div>
						<div className="name" key={index.name}>
							{work.name}
						</div>
						<div className="year" key={index.year}>
							{work.year}
						</div>
					</div>
					<div
						className="work-description"
						key={index.description}
					>
						{work.description}
					</div>
				</div>
			);
		});

		return (
			<div className="work">
				<div className="section-title">work experience</div>
				<div className="section-details">
					{workDataLoop}
				</div>
			</div>
		);
	}
} */

let workData = [
	{
		name: 'Ogilvy & Mather',
		position: 'Front End Developer',
		year: '2015 - Present',
		description:
			'Developed, managed content and maintained HTML5 ads using GSAP Javascript library. Built responsive e-mail templates, created animated videos for Social Ads. Assisted in design and layout development. Trained the dev team in all aspects of development, including Git.',
	},
	{
		name: 'Staples/quill',
		position: 'Front End Developer',
		year: '2014 - 2015',
		description:
			'Designed, developed and maintained Wordpress pages. Created static banners for use on quill.com. Built a responsive email template used for all future email campaigns.',
	},
	{
		position: 'Web Designer & Developer',
		name: 'Media Made Great',
		year: '2010 - 2014',
		description:
			'Created and maintained the company’s website. Client work included websites, landing pages, and email marketing campaigns. Primarily hand coded HTML5, CSS3 and Javascript. Other responsibilities include production work and layout design.',
	},
];

// map through each work data
const workDataLoop = workData.map((work, index) => {
	return (
		<div className="work-card" key={index}>
			<div className="work-header" key={index}>
				<div className="position" key={index.position}>
					{work.position}
				</div>
				<div className="name" key={index.name}>
					{work.name}
				</div>
				<div className="year" key={index.year}>
					{work.year}
				</div>
			</div>
			<div
				className="work-description"
				key={index.description}
			>
				{work.description}
			</div>
		</div>
	);
});

const WorkData = () => {
	return (
		<div className="work">
			<div className="section-title">work experience</div>
			<div className="section-details">{workDataLoop}</div>
		</div>
	);
};

export default WorkData;
