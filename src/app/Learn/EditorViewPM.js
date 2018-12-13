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

// import PMEditorView from './EditorViewPM';
import './editorPM.css';


export default class PMEditorView extends React.Component {

  static PropTypes = {
    
  };

  createEditorView = (element) => {
    if (element != null) {
      this.editorView = new EditorView(element, {
        state: this.props.editorState,
        dispatchTransaction: this.dispatchTransaction,
      });
    }
  };

  dispatchTransaction = transaction => {
    const editorState = this.props.editorState.apply(transaction);
    if (this.editorView != null) {
      this.editorView.updateState(editorState);
    }
    this.props.onChange();
    this.props.onEditorState(editorState);
  };

  focus() {
    if (this.editorView) {
      this.editorView.focus();
    }
  }
  
  componentWillUnmount() {
    if (this.editorView) {
      this.editorView.destroy();
    }
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return <div className='editor-view' ref={this.createEditorView} />;
  }
}