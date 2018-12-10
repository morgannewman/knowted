import "./Learn.scss";
import React from "react";
import { connect } from "react-redux";
import Editor from "./Editor";

export class Learn extends React.Component {
  render() {
    return (
      <>
        <div className="learn">
          <iframe
            id="ytplayer"
            type="text/html"
            src="https://www.youtube.com/embed/M7lc1UVf-VE"
            frameborder="0"
            disablekb="1"
            title="YouTube"
          />
          <Editor />
        </div>
      </>
    );
  }
}

export default connect()(Learn);
