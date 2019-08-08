import React, { Component } from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Navbar from './component/layout/Navbar';
import Index from './component/layout/Index';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <>
      <Navbar />
      <div className = "container">
        <Switch>
          <Route exact path = "/" component = {Index} />
        </Switch>
      </div>

      </>
      </Router>
    )
  }
}
export default App;