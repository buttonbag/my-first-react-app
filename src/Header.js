import React, { Component } from 'react';

class Header extends Component {
    render() {
        return(
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
        );
    }
}

export default Header;