import React from 'react';
import 'react-quill/dist/quill.snow.css';
import Quill from 'react-quill';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';
import { submitTopicNotebookUpdate } from '../../controller/actions/topic';

export class Editor extends React.Component {
	static propTypes = {
		initialText: PropTypes.any
	};

	state = {
		text: '', // set when component mounts
		__placeholderId__: 2,
		isDisabled: true
	};

	componentDidMount() {
		// Initialize the initialText value from props or an empty editor
		this.setState({ text: this.props.initialText || '' }, () => this.setState({ isDisabled: false }));
		// initialize autosave
		this.save = debounce(
			contents => this.props.dispatch(submitTopicNotebookUpdate(this.state.__placeholderId__, contents)),
			5000,
			{ maxWait: 15000 }
		);
	}

	componentWillUnmount() {
		// Force autosave on unmount
		this.save.flush();
	}

	handleChange = (content, delta, source, editor) => {
		this.setState({ text: content });
		this.save(editor.getContents());
	};

	render() {
		const { isDisabled, text } = this.state;

		return (
			<Quill value={text} readOnly={isDisabled} onChange={this.handleChange} className="editor" theme="snow" />
		);
	}
}

export default connect()(Editor);
