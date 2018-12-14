import React from 'react';
import hljs from 'highlight.js';
import 'react-quill/dist/quill.snow.css';
import Quill from 'react-quill';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';
import { submitNotebookUpdate } from '../../controller/actions/learn';
import cache from '../../controller/api/cache';

hljs.configure({   // optionally configure hljs
  languages: ['javascript', 'ruby', 'python']
});

export class Editor extends React.Component {
	static propTypes = {
		initialText: PropTypes.any,
		userId: PropTypes.any
	};

	state = {
		text: '', // set when component mounts
		__placeholderId__: 2,
		isDisabled: true,
		hasPendingUpdate: false
	};

	editorRef = React.createRef();

	componentDidMount() {
		window.addEventListener('unload', this.handleWindowClose);
		// Initialize the initialText value from props or as empty editor
		this.setState({ text: this.props.initialText || '' }, () => this.setState({ isDisabled: false }));
		// initialize autosave
		this.save = debounce(
			notebook =>
				this.setState({ hasPendingUpdate: false }, () =>
					this.props.dispatch(submitNotebookUpdate({ notebook, id: this.state.__placeholderId__ }))
				),
			2000,
			{ maxWait: 10000 }
		);
		
		const docLength = this.editorRef.getEditor().getLength();
		this.editorRef.getEditor().insertText(docLength === 1 ? 0 : docLength,'TEST\n', { bold: true, header: 1, underline: true });
	}

	handleWindowClose = () => {
		if (this.state.hasPendingUpdate) {
			cache.requests.push({
				userId: this.props.userId,
				action: submitNotebookUpdate.name,
				payload: { id: this.state.__placeholderId__, notebook: this.state.lastUpdate }
			});
		}
	};

	componentWillUnmount() {
		window.removeEventListener('unload', this.handleWindowClose);
	}

	handleChange = (content, delta, source, editor) => {
		const lastUpdate = editor.getContents();
		console.log(lastUpdate);
		this.setState({ lastUpdate, text: content, hasPendingUpdate: true });
		this.save(lastUpdate);
	};

	render() {
		const { isDisabled, text } = this.state;
		const toolbar = [['bold', 'italic', 'underline', 'strike'],        // toggled buttons
		['blockquote', 'code-block'],
	
		[{ 'header': 1 }, { 'header': 2 }],               // custom button values
		[{ 'list': 'ordered'}, { 'list': 'bullet' }],
		[{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
		[{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
		[{ 'direction': 'rtl' }],                         // text direction
	
		[{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
		[{ 'header': [1, 2, 3, 4, 5, 6, false] }],
	
		[{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
		[{ 'font': [] }],
		[{ 'align': [] }],
	
		['clean'] ];

		return (
			<Quill value={text} modules={{
				syntax: true,
				toolbar
			}} readOnly={isDisabled} onChange={this.handleChange} className="editor" theme="snow" ref={(element) => this.editorRef = element} />
		);
	}
}

const mapStateToProps = state => ({
	userId: state.auth.user && state.auth.user.id
});

export default connect(mapStateToProps)(Editor);
