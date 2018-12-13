import React from 'react';
import {EditorState} from "prosemirror-state";
import {EditorView} from "prosemirror-view";
import {Schema, DOMParser} from "prosemirror-model";
import {schema} from "prosemirror-schema-basic";
import {addListNodes} from "prosemirror-schema-list";
import {exampleSetup} from "prosemirror-example-setup";

import { submitTopicNotebookUpdate } from '../../controller/actions/topic';
import debounce from 'lodash.debounce';
import cache from '../../controller/api/cache';
import { connect } from 'react-redux';

import PMEditorView from './EditorViewPM';
import './editorPM.css';



export class Editor extends React.Component {

	state = {
		text: '', // set when component mounts
		__placeholderId__: 4000,
		isDisabled: true,
		hasPendingUpdate: false
	};

  constructor(props) {
    super(props);

    let editorState;

    const editorSchema = new Schema({
      nodes: addListNodes(schema.spec.nodes, "paragraph block*", "block"),
      marks: schema.spec.marks
    })

    if(this.state.lastUpdate){
      editorState = EditorState.create({
        doc:  DOMParser.fromSchema(editorSchema).parse(Node.fromJSON(this.state.lastUpdate)),
        schema: schema,
        plugins: exampleSetup({schema})
      })
    } else {
      EditorState.create({
        doc: DOMParser.fromSchema(editorSchema).parse(document.querySelector("#content")),
        plugins: exampleSetup({schema: editorSchema})
      });
    }

    this.state = {
      editorState
    };
  }


	componentDidMount() {
		window.addEventListener('unload', this.handleWindowClose);
		// Initialize the initialText value from props or as empty editor
		this.setState({ text: this.props.initialText || '' }, () => this.setState({ isDisabled: false }));
		// initialize autosave
		this.save = debounce(
			notebook =>
				this.setState({ hasPendingUpdate: false }, () =>
					this.props.dispatch(submitTopicNotebookUpdate({ notebook, id: 4001 }))
				),
			2000,
			{ maxWait: 10000 }
		);
	}

	handleWindowClose = () => {
		if (this.state.hasPendingUpdate) {
			cache.requests.push({
				userId: this.props.userId,
				action: submitTopicNotebookUpdate.name,
				payload: { id: 4001, notebook: this.state.lastUpdate }
			});
		}
	};

  componentWillUnmount() {
		window.removeEventListener('unload', this.handleWindowClose);
	}

	handleChange = (content, delta, source, editor) => {
		const lastUpdate = this.state.editorState.doc.toJSON();
		this.setState({ lastUpdate, text: content, hasPendingUpdate: true });
		this.save(lastUpdate);
  };
  
  onEditorState = (editorState) => {
    this.setState({editorState});
  };

  render() {
    const {editorState} = this.state;
    return (
      <>
        <div className="menu"/>
          <PMEditorView
            onChange={this.handleChange}
            ref={this.onEditorView}
            editorState={editorState}
            onEditorState={this.onEditorState}
          />
      </>
    );
  }
}

const mapStateToProps = state => ({
	userId: state.auth.user && state.auth.user.id
});

export default connect(mapStateToProps)(Editor);
