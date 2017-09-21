import React, { Component } from 'react';
import { Route } from 'react-router-dom'


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
        <Route path="/dashboard" component={AuthDashboard}/>
        <Route path="/login" render={(props) => <LoginForm login={this.loginUser} {...props}/>}/>
        <Route path="/signup" render={(props) => <SignupForm login={this.loginUser} {...props}/>}/>
      </div>
    );
  }
}

export default App;