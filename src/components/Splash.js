import React, { Component } from 'react';
import { Link } from 'react-router-dom'





class Splash extends Component {
  render() {
    return (
      <div className="splash">

          <div className="splash-content">
            <p className="slogan">Where Stars Align</p>
            <div className="divider"></div>
            <p className="tagline">Transform innate passion into a reality. Combine with others & end personal limits.</p>
            <div className="splash-buttons">
              <Link to={`/signup`} className="button"><div className="link-bg"></div><span>Sign Up</span></Link>
              <Link to={`/login`} className="button"><div className="link-bg"></div><span>Login</span></Link>
            </div>
        </div>
      </div>
    );
  }
}

export default Splash;
