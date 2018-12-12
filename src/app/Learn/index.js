import './Learn.scss';
import React from 'react';
import { connect } from 'react-redux';
import Editor from './Editor';
import PropTypes from 'prop-types';

export class Learn extends React.Component {
	static propTypes = {
		match: PropTypes.object
	};

	state = {
		loading: true,
		__placeholderNotebook__: ''
	};

	componentDidMount() {
		// const { resourceId } = this.props.match.params;
		// TODO: ensure resources exist for topic
		// Fetch initial notebook value
		this.setState({ loading: false });
	}

	render() {
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

const mapStateToProps = () => ({});

export default connect(mapStateToProps)(Learn);
