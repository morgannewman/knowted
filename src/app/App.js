import React, { Component } from 'react';
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router
} from 'react-router-dom';
import Landing from './Landing';
import Nav from './common/Nav';
import Dashboard from './Dashboard';
import TopicsDashboard from './TopicDasboard';
export class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route
              exact
              path={['/', '/login', '/register']}
              component={Landing}
            />
            <Route exact path="/dashboard" component={TopicsDashboard} />
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
