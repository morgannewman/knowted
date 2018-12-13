import './Learn.scss';
import React from 'react';
import { connect } from 'react-redux';
import Editor from './Editor';
// import Editor from './EditorPM';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { initializeLearn, resetLearn } from '../../controller/actions/learn';
import Loading from '../common/Loading';

export class Learn extends React.Component {
	static propTypes = {
		match: PropTypes.object
	};

	state = {
		loading: true,
		__placeholderNotebook__: ''
	};

	componentDidMount() {
		const { topicId, resourceId } = this.props.match.params; // from router
		this.props.dispatch(initializeLearn(topicId, resourceId));
	}

	render() {
		const { stateIsStale, loading, resourceNotFound } = this.props;

		if (resourceNotFound) {
			this.props.dispatch(resetLearn());
			return <Redirect to="/dashboard" />;
		}

		if (stateIsStale || loading) return <Loading />;

		const { __placeholderNotebook__ } = this.state;
		return (
			<>
				<div className="learn">
					{/* TODO: Conditional logic to render cards for non-YT resources */}
					<iframe
						id="ytplayer"
						type="text/html"
						src="https://www.google.com/"
						frameBorder="0"
						disablekb="1"
						title="YouTube"
						sandbox="allow-scripts allow-popups allow-forms allow-same-origin"
					/>
					<Editor initialText={__placeholderNotebook__} />
				</div>
			</>
		);
	}
}

const mapStateToProps = (state, props) => {
	const { topicId, resourceId } = props.match.params;
	const currentTopic = state.learn.topic;
	const currentResource = state.learn.resource;

	const topicIsStale = currentTopic && currentTopic.id !== topicId;
	const resourceIsStale = currentResource && currentResource.id !== resourceId;

	return {
		stateIsStale: topicIsStale || resourceIsStale,
		loading: state.learn.loading,
		resourceNotFound: state.learn.error && state.learn.error.status === 404
	};
};

export default connect(mapStateToProps)(Learn);
