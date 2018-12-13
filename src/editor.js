import React from 'react';
import {EditorState} from "prosemirror-state";
import {EditorView} from "prosemirror-view";
import {Schema, DOMParser} from "prosemirror-model";
import {schema} from "prosemirror-schema-basic";
import {addListNodes} from "prosemirror-schema-list";
import {exampleSetup} from "prosemirror-example-setup";
import { redo, history} from "prosemirror-history"
import {keymap} from "prosemirror-keymap";

import {undo} from 'prosemirror-commands';

// import './editor.css';

// class extends React.Component {

//   render(){

//     const mySchema = new Schema({
//       nodes: addListNodes(schema.spec.nodes, "paragraph block*", "block"),
//       marks: schema.spec.marks
//     })
    
//     this.view = new EditorView(document.querySelector("#root"), {
//       state: EditorState.create({
//         doc: DOMParser.fromSchema(mySchema).parse(document.querySelector("#content")),
//         plugins: exampleSetup({schema: mySchema})
//       })
//     })

  // let state = EditorState.create({schema,
  //   plugins: [
  //   history(),
  //   keymap({"Mod-z": undo, "Mod-y": redo})
  // ]})
  // let view = new EditorView(document.querySelector("#root"), {
  //   state, 
  //   dispatchTransaction(transaction) {
  //     console.log(transaction);
  //     console.log("Document size went from", transaction.before.content.size,
  //                 "to", transaction.doc.content.size);
  //     let newState = view.state.apply(transaction);
  //     view.updateState(newState);
  //   }});

  //     return (<div></div>);
  //   }

  // }

class ProseMirrorEditorView extends React.Component {
  props = {
    editorState: null,
    onEditorState: null,
  };

  createEditorView = (element) => {
    if (element != null) {
      this.editorView = new EditorView(element, {
        state: this.props.editorState,
        dispatchTransaction: this.dispatchTransaction,
      });
    }
  };

  dispatchTransaction = (tx) => {
    // In case EditorView makes any modification to a state we funnel those
    // modifications up to the parent and apply to the EditorView itself.
    const editorState = this.props.editorState.apply(tx);
    if (this.editorView != null) {
      this.editorView.updateState(editorState);
    }
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
    // Note that EditorView manages its DOM itself so we'd ratrher don't mess
    // with it.
    return false;
  }

  render() {
    // Render just an empty div which is then used as a container for an
    // EditorView instance.
    return <div ref={this.createEditorView} />;
  }
}

export default class RichTextEditor extends React.Component {

  constructor(props) {
    super(props);

    const mySchema = new Schema({
      nodes: addListNodes(schema.spec.nodes, "paragraph block*", "block"),
      marks: schema.spec.marks
    })
  
    this.state = {
      editorState: EditorState.create({
        doc: DOMParser.fromSchema(mySchema).parse(document.querySelector("#content")),
        plugins: exampleSetup({schema: mySchema})
      })
    };
  }

  dispatchTransaction = tx => {
    const editorState = this.state.editorState.apply(tx);
    this.setState({editorState});
  };

  onEditorState = (editorState) => {
    this.setState({editorState});
  };

  render() {
    const {editorState} = this.state;
    return (
      <div>
        <div class="menu">
          <UndoMenuButton
            editorState={editorState}
            dispatchTransaction={this.dispatchTransaction}
          />
        </div>
        <div class="editorview-wrapper">
          <ProseMirrorEditorView
            ref={this.onEditorView}
            editorState={editorState}
            onEditorState={this.onEditorState}
          />
        </div>
      </div>
    );
  }
}

function MenuButton({
  editorState,
  dispatchTransaction,
  children,
  command,
  isActive,
  isAllowed,
}) {
  const onMouseDown = (e) => {
    e.stopPropagation();
    // so we don't steal focus from EditorView
    e.preventDefault();
    // this is like an `run` field in prosemirror-menu item spec
    command(editorState, dispatchTransaction);
  };
  // this is like an `select` field in prosemirror-menu item spec
  const disabled = isAllowed && !isAllowed(editorState);
  // this is like an `active` field in prosemirror-menu item spec
  const active = isActive && isActive(editorState);
  return (
    <button disabled={disabled} active={active} onMouseDown={onMouseDown}>
      {children}
    </button>
  );
}

function UndoMenuButton(props) {
  return (
    <MenuButton {...props} command={undo} isAllowed={undo}>
      Undo
    </MenuButton>
  );
}