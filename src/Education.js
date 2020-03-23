import React, { Component } from 'react';

const EducationList = () => {
    return (
        <div className="section-details">
                
                    {/* edu1 */}
                    <div className="edu-card">
                        <div className="edu-header">
                        <div className="position">Westwood College, Chicago IL</div>
                        <div className="name">BA in Visual Communications</div>
                        <div className="year">2010</div>
                        </div> 
                        {/* end edu-header */}
                        <div className="edu-description">
                        Relevant Courses: 
                        Web/Media Production, Package Design, Cross Media Production, Advanced Image Editing, Color Theory and Advertising.
                        </div>
                    </div>
                    
                    {/* edu2 */}
                    <div className="edu-card">
                        <div className="edu-header">
                        <div className="position">Meetups</div>
                        <div className="year">2017 - Present</div>
                        </div> 
                        {/* end edu-header */}
                        <div className="edu-description">
                        I attend tons of free developer meetups during the summer to keep myself immersed into the internet of things and pizza. The good ones always have 'zas.
                        </div>
                    </div>
                    
                    {/* edu2 */}
                    <div className="edu-card">
                        <div className="edu-header">
                        <div className="position">Codepen</div>
                        <div className="year">2017 - Present</div>
                        </div> 
                        {/* end edu-header */}
                        <div className="edu-description">
                        I use Codepen as an online scratchpad to jot down new ideas that I've picked up along the way as well as experiments before implementing them in a live project. 
                        </div>
                    </div>
                    
                    {/* edu2 */}
                    <div className="edu-card">
                        <div className="edu-header">
                        <div className="position">Google</div>
                        <div className="year">2010 - present</div>
                        </div> 
                        {/* end edu-header */}
                        <div className="edu-description">
                        I try to figure out what I don't already know and if I can't, I turn to the world's greatest teacher – Google!
                        </div>
                    </div>
                
                </div>
    );
}

class Education extends Component {
    render() {
        return(
            <div className="edu">
                <div className="section-title">education</div>
                    <EducationList />
          </div>
        );
    }
}

export default Education;