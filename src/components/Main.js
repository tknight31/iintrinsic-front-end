import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Splash from './Splash'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'



class Main extends Component {
  render() {
    return (
      <div className="main">

        <div className="header no-auth-nav">
          <div className="head-menu menu-left">
            <p>intrinsic</p>
          </div>
          <div className="head-menu menu-right">
            <Link to={`/login`}>Login</Link>
            <Link to={`/signup`}>Signup</Link>
          </div>
        </div>

        <Route exact path="/" render={(props) => <Splash/>}/>
        <Route exact path="/login" render={(props) => <LoginForm login={this.loginUser} {...props}/>}/>
        <Route exact path="/signup" render={(props) => <SignupForm login={this.loginUser} {...props}/>}/>
          <div className="no-auth-bg"></div>

          <video poster="http://space-facts.com/wp-content/uploads/magellanic-clouds.png" id="bgvid" playsInline autoPlay muted loop>
            <source src="videos/galaxy.mp4" type="video/mp4"/>
          </video>

      </div>
    );
  }
}

export default Main;
