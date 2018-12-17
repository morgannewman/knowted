import './Learn.scss';

import React from 'react';
import { connect } from 'react-redux';
import Editor from './Editor';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import { initializeLearn, resetLearn } from '../../controller/actions/learn';
import Loading from '../common/Loading';
import Breadcrumbs from '../common/Breadcrumbs';

export class Learn extends React.Component {
	static propTypes = {
		match: PropTypes.object
	};

	componentDidMount() {
		const { topicId, resourceId } = this.props.match.params; // from router
		this.props.dispatch(initializeLearn(topicId, resourceId));
	}

	render() {
		const { stateIsStale, loading, resourceNotFound, notebook, topic, resource } = this.props;

		if (resourceNotFound) {
			this.props.dispatch(resetLearn());
			return <Redirect to="/dashboard" />;
		}

		if (stateIsStale || loading) return <Loading />;

		return (
			<>
				<Breadcrumbs
					topicTitle={topic.title}
					topicId={topic.id}
					resourceId={resource.id}
					resourceTitle={resource.title}
				/>
				<div className="learn">
					{/* TODO: Conditional logic to render a different card/layout for state.learn.resource.type === other resources */}
					{/* TODO: Change this to be dynamic for state.learn.resource.type === youtube*/}
					<iframe
						id="ytplayer"
						type="text/html"
						src="https://www.youtube.com/embed/JeT2tXqp4m0"
						frameBorder="0"
						disablekb="1"
						title="YouTube"
						sandbox="allow-scripts allow-popups allow-forms allow-same-origin"
					/>
					<Editor initialText={notebook} />
				</div>
			</>
		);
	}
}

const mapStateToProps = (state, props) => {
	const { topicId, resourceId } = props.match.params;
	const currentTopic = state.learn.topic;
	const currentResource = state.learn.resource;

	const topicIsStale = currentTopic && currentTopic.id !== Number(topicId);
	const resourceIsStale = currentResource && currentResource.id !== Number(resourceId);

	return {
		stateIsStale: topicIsStale || resourceIsStale,
		loading: state.learn.loading,
		resourceNotFound: state.learn.error && state.learn.error.status === 404,
		notebook: state.learn.topic && (state.learn.topic.notebook || ''),
		resource: currentResource,
		topic: currentTopic
	};
};

export default connect(mapStateToProps)(Learn);
