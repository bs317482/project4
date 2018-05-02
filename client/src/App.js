import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
// import logo from './logo.svg';
// import './App.css';
import Landing from './components/Landing'
import Show from './components/Show';
import BrandProfile from './components/BrandProfile';
// import ShowPage from './components/ShowPage'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
        <Route exact path="/" component={Landing}/>
        <Route exact path="/show" component={Show}/>
        <Route exact path="/show/brand/:brandId" component={BrandProfile} />
        </Switch>
      </Router>
    );
  }
}

export default App;
