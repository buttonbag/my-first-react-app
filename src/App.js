import React from 'react';
// import './App.css';
import { Header } from './Header';
import { Body } from './Body';
import { Experience } from './Experience';
import { Footer } from './Footer';

class App extends React.Component {
	render() {
		return (
			<main>
				<Header />
				<Body />
				<Experience />
				<Footer />
			</main>
		);
	}
}

export default App;
