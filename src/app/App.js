import React, { Component } from 'react';
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router
} from 'react-router-dom';
import Landing from './Landing';
import Dashboard from './Dashboard';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;