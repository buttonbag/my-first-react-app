import React, { Component } from 'react';
import Header from './Header';
import Profile from './Profile';
import Skills from './Skills';
import Work from './Work';
import Education from './Education';

class App extends Component {
    render() {
      return (
        <div className="App container">
        
        {/*   header */}
        <Header />
        {/*   end header */}
        
        
        {/*   content */}
        <div className="content">
          
          {/* profile */}
          <Profile />
          
          {/* skills */}
          <Skills />
          
          {/* work experience */}
          <Work />
          
          {/* education */}
          <Education />
        </div>      
        {/*   end content */}
      </div> 
      /* end container */
      )
    }
  }

  export default App;