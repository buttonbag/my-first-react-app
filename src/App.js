import React, { Component } from 'react';
import Header from './Header';
import Profile from './Profile';
import Skills from './Skills';
import Work from './Work';
import Education from './Education';

class App extends Component {
    render() {
      return (
        <div className="container">
            <Header />
            <div className="content">
                <Profile />
                <Skills />
                <Work />
                <Education />
            </div>
        </div> 
      )
    }
  }

  export default App;