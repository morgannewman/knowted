import React, { Component } from 'react';
import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../controller/store';
import Landing from './Landing';
import Nav from './common/Nav';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<div className="App">
						<Nav />
						<Switch>
							<Route exact path="/" component={Landing} />
							<Redirect to="/" />
						</Switch>
					</div>
				</Router>
			</Provider>
		);
	}
}

export default App;
