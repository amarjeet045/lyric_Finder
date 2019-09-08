import React, { Component } from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Navbar from './component/layout/Navbar';
import Index from './component/layout/Index';
import {Provider} from './Context';
import Lyrics  from './component/tracks/Lyrics';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
      <Router>
      <>
      <Navbar />
      <div className = "container">
        <Switch>
          <Route exact path = "/" component = {Index} />
          <Route exact path="/lyrics/track/:id" component={Lyrics} />
        </Switch>
      </div>

      </>
      </Router>
      </Provider>
    )
  }
}
export default App;