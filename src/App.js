import React, { Component } from 'react';

class App extends Component {
    render() {
      return (
        // <div className="App">
        //   <h1>Hello, React!</h1>
        // </div>
  
  
  
    
        <div className="container">
        
        {/*   header */}
        <div className="header">
          
          {/* header name */}
          <h1 className="name">Louie Camacho</h1>
          
          {/* end header name */}
          
          {/* contact info */}
          <div className="contact">
            <a href="http://www.iambuttonbag.com">IamButtonbag.com</a>
            <span className="social">
              <a href="https://github.com/buttonbag"><i className="fab fa-github"></i></a>
              <a href="https://codepen.io/buttonbag"><i className="fab fa-codepen"></i></a>
              <a href="https://www.linkedin.com/in/louiecamacho/"><i className="fab fa-linkedin"></i></a>
              <a href="https://twitter.com/iambuttonbag"><i className="fab fa-twitter"></i></a>
            </span>
            <a href="mailto:louiecamacho@gmail.com">louieCamacho@gmail.com</a>
            <span>773.952.0534</span>
          </div>
          {/* end contact info */}
        </div>
        {/*   end header */}
        
        
        {/*   content */}
        <div className="content">
          
          {/* profile */}
          <div className="profile">
            <div className="section-title">profile</div>
            <div className="section-details">Detail oriented Front End Developer and designer with a passion for learning new web technologies guided by my natural curiosity of web development. Possesses a track record of developing fully functioning websites and online advertisements from design phase all the way to production stage. Passionate about learning and implementing new technologies and a regular participant of local web developer meetups. 
            </div>
          </div>
          
          {/* skills */}
          <div className="skills">
            <div className="section-title">superpowers</div>
            <div className="section-details">
              <ul className="skills-list">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>jQuery</li>
                <li>GSAP</li>
                <li>Sublime Text</li>
                <li>Git</li>
                <li>Photoshop</li>
                <li>Illustrator</li>
                <li>Animate</li>
                <li>After Effects</li>
                <li>InDesign</li>
              </ul>
            </div>
          </div>
          
          {/* work experience */}
          <div className="work">
            <div className="section-title">work experience</div>
            <div className="section-details">
              
              {/* work1 */}
              <div className="work-card">
                <div className="work-header">
                  <div className="position">Front End Developer</div>
                  <div className="name">Ogilvy &amp; Mather</div>
                  <div className="year">2015 - Present</div>
                </div> 
                {/* end work-header */}
                <div className="work-description">
                  Developed, managed content and maintained HTML5 ads using GSAP Javascript library. Built responsive e-mail templates, created animated videos for Social Ads. Assisted in design and layout development. Trained the dev team in all aspects of development, including Git.
                </div>
              </div>
              
              {/* work2 */}
              <div className="work-card">
                <div className="work-header">
                  <div className="position">Front End Developer</div>
                  <div className="name">Staples/quill</div>
                  <div className="year">2014 - 2015</div>
                </div> 
                {/* end work-header */}
                <div className="work-description">
                  Designed, developed and maintained Wordpress pages. Created static banners for use on quill.com. Built a responsive email template used for all future email campaigns.
                </div>
              </div>
              
              {/* work3 */}
              <div className="work-card">
                <div className="work-header">
                  <div className="position">Web Designer &amp; Developer</div>
                  <div className="name">Media Made Great</div>
                  <div className="year">2010 - 2014</div>
                </div> 
                {/* end work-header */}
                <div className="work-description">
                  Created &amp; maintained the company’s website. Client work included websites, landing pages, and email marketing campaigns. Primarily hand coded HTML5, CSS3 and Javascript. Other responsibilities include production work and layout design.
                </div>
              </div>
              
            </div>
          </div>
          
          {/* education */}
          <div className="work">
            <div className="section-title">education</div>
            <div className="section-details">
              
              {/* work1 */}
              <div className="work-card">
                <div className="work-header">
                  <div className="position">Westwood College, Chicago IL</div>
                  <div className="name">BA in Visual Communications</div>
                  <div className="year">2010</div>
                </div> 
                {/* end work-header */}
                <div className="work-description">
                  Relevant Courses: 
                  Web/Media Production, Package Design, Cross Media Production, Advanced Image Editing, Color Theory and Advertising.
                </div>
              </div>
              
              {/* work2 */}
              <div className="work-card">
                <div className="work-header">
                  <div className="position">Meetups</div>
                  <div className="year">2017 - Present</div>
                </div> 
                {/* end work-header */}
                <div className="work-description">
                  I attend tons of free developer meetups during the summer to keep myself immersed into the internet of things and pizza. The good ones always have 'zas.
                </div>
              </div>
              
              {/* work2 */}
              <div className="work-card">
                <div className="work-header">
                  <div className="position">Codepen</div>
                  <div className="year">2017 - Present</div>
                </div> 
                {/* end work-header */}
                <div className="work-description">
                  I use Codepen as an online scratchpad to jot down new ideas that I've picked up along the way as well as experiments before implementing them in a live project. 
                </div>
              </div>
              
              {/* work2 */}
              <div className="work-card">
                <div className="work-header">
                  <div className="position">Google</div>
                  <div className="year">2010 - present</div>
                </div> 
                {/* end work-header */}
                <div className="work-description">
                  I try to figure out what I don't already know and if I can't, I turn to the world's greatest teacher – Google!
                </div>
              </div>
              
            </div>
          </div>
        </div>      
        {/*   end content */}
      </div> 
      /* end container */
      )
    }
  }

  export default App;