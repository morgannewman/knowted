import React from "react";
import "react-quill/dist/quill.snow.css";
import Quill from "react-quill";
import { connect } from "react-redux";

export class Editor extends React.Component {
  state = {
    text: ""
  };

  handleChange = delta => this.setState({ text: delta });

  render() {
    return (
      <Quill
        value={this.state.text}
        onChange={this.handleChange}
        className="editor"
      />
    );
  }
}

export default connect()(Editor);
