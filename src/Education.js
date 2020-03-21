import React, { Component } from 'react';

class Education extends Component {
    render() {
        return(
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
        );
    }
}

export default Education;