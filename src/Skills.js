import React, { Component } from 'react';

const Superpowers = () => {
    return(
        <ul className="superpowers">
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
    );
}

class Skills extends Component {
    render() {
        return(
            <div className="skills">
                <div className="section-title">superpowers</div>
                <div className="section-details">
                    <Superpowers />
                </div>
            </div>
        );
    }
}

export default Skills;