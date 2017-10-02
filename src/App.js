import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import './App.css';
import Dashboard from './components/Dashboard'
import Main from './components/Main'

import authorize from './components/hocs/authorize'


// = / -> Splash if theyre not logged in


class App extends Component {
  render() {


    if (localStorage.getItem("token")) {
      return (
        <div className="App">
          <Route path="/" component={authorize(Dashboard)}/>

          <div className="bg-filter"></div>

        </div>
      )
    } else {
      return (
        <div className="App">
          <Route path="/" component={Main}/>
        </div>
      );
    }

  }
}

export default App;
