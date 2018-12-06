import React, { Component } from 'react';
import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../controller/store';
import Landing from './Landing';
import Nav from './common/Nav';

export class App extends Component {
	render() {
		return (
			<Router>
				<Provider store={store}>
					<div className="App">
						<Nav />
						<Switch>
							<Route exact path={['/', '/login', '/register']} component={Landing} />
							<Redirect to="/" />
						</Switch>
					</div>
				</Provider>
			</Router>
		);
	}
}

export default App;