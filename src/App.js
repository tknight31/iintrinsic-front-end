import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom'


import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'

import authorize from './components/hocs/authorize'



class App extends Component {
  render() {
    const AuthDashboard = authorize(Dashboard)
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Route path="/dashboard" component={AuthDashboard}/>
        <Route path="/login" render={(props) => <LoginForm login={this.loginUser} {...props}/>}/>
        <Route path="/signup" render={(props) => <SignupForm login={this.loginUser} {...props}/>}/>
      </div>
    );
  }
}

export default App;
