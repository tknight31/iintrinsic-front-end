import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import './App.css';
import Dashboard from './components/Dashboard'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'

import authorize from './components/hocs/authorize'



class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/dashboard" component={authorize(Dashboard)}/>
        <Route path="/login" render={(props) => <LoginForm login={this.loginUser} {...props}/>}/>
        <Route path="/signup" render={(props) => <SignupForm login={this.loginUser} {...props}/>}/>
        <div className="bg-filter"></div>
      </div>
    );
  }
}

export default App;
