import React, { Component } from 'react';
import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom';
import Landing from './Landing';
import Nav from './common/Nav';
import Dashboard from './Dashboard';
import Learn from './Learn';
import { connect } from 'react-redux';
import cache from '../controller/api/cache';
import { submitNotebookUpdate } from '../controller/actions/learn';
import TopicDashboard from './TopicDasboard';
import requiresLogin from './common/requiresLogin';

const cacheableActions = {
	submitNotebookUpdate
};

export class App extends Component {
	componentDidUpdate(prevProps) {
		if (prevProps.loggedIn === false && this.props.loggedIn === true) {
			const actions = cache.requests.pop();
			for (const req of actions) {
				if (this.props.userId === req.userId && req.action in cacheableActions) {
					this.props.dispatch(cacheableActions[req.action](req.payload));
				}
			}
		}
	}
	render() {
		return (
			<Router>
				<div className="App">
					<Nav />
					<Switch>
						{/* <Route path="/learn" component={TopicDashboard} /> */}
						<Route exact path={['/', '/login', '/register']} component={Landing} />
						<Route exact path="/dashboard" component={requiresLogin(Dashboard)} />
						<Route exact path="/dashboard/:topicId" component={requiresLogin(TopicDashboard)} />
						<Route exact path="/dashboard/:topicId/:resourceId" component={requiresLogin(Learn)} />
						<Redirect to="/" />
					</Switch>
				</div>
			</Router>
		);
	}
}

const mapStateToProps = state => ({ loggedIn: state.auth.loggedIn, userId: state.auth.user && state.auth.user.id });

export default connect(mapStateToProps)(App);
