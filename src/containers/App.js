// import logo from './logo.svg';
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './../css/App.css';
import LoginComponent from './landing/login';
import Home from "./homepage/index";
class App extends React.Component {
  render() {
    return <Router>
      <Switch>
        <Route exact path='/' component={LoginComponent} />
        <Route exact path='/home' component={Home} />
      </Switch>
    </Router>
  }
}

export default App;
