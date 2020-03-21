import React, { Component } from 'react';

class Work extends Component {
    render() {
        return(
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
        );
    }
}

export default Work;