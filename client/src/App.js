import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
// import logo from './logo.svg';
// import './App.css';
import Landing from './components/Landing'
import Show from './components/Show';
import BrandProfile from './components/BrandProfile';
import NewBrandForm from './components/NewBrandForm';
import VideoRecord from './components/VideoRecord';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
        <Route exact path="/" component={Landing}/>
        <Route exact path="/show" component={Show}/>
        <Route exact path="/show/brand/:brandId" component={BrandProfile} />
        <Route exact path= "/newbrandform" component={NewBrandForm} />
        <Route exact path= "/VideoRecord" component={VideoRecord} />
        </Switch>
      </Router>
    );
  }
}

export default App;
