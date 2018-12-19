import './Editor.scss';

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Quill from 'react-quill';
import debounce from 'lodash.debounce';

import { submitNotebookUpdate } from '../../controller/actions/learn';
import cache from '../../controller/api/cache';

export class Editor extends React.Component {
  static propTypes = {
    initialText: PropTypes.any,
    userId: PropTypes.any
  };

  state = {
    text: '', // set when component mounts
    isDisabled: true,
    hasPendingUpdate: false
  };

  componentDidMount() {
    window.addEventListener('unload', this.handleWindowClose);
    // Initialize the initialText value from props or as empty editor
    this.setState({ text: this.props.initialText || '' }, () =>
      this.setState({ isDisabled: false })
    );
    // initialize autosave
    this.save = debounce(
      notebook =>
        this.setState({ hasPendingUpdate: false }, () =>
          this.props.dispatch(
            submitNotebookUpdate({ notebook, id: this.props.topicId })
          )
        ),
      2000,
      { maxWait: 10000 }
    );
  }

  handleWindowClose = () => {
    if (this.state.hasPendingUpdate) {
      cache.requests.push({
        userId: this.props.userId,
        action: submitNotebookUpdate.name,
        payload: { id: this.props.topicId, notebook: this.state.lastUpdate }
      });
    }
  };

  componentWillUnmount() {
    window.removeEventListener('unload', this.handleWindowClose);
  }

  handleChange = (content, delta, source, editor) => {
    const lastUpdate = editor.getContents();
    this.setState({ lastUpdate, text: content, hasPendingUpdate: true });
    this.save(lastUpdate);
  };

  render() {
    const { isDisabled, text } = this.state;
    const { type } = this.props;

    return (
      <Quill
        value={text}
        readOnly={isDisabled}
        onChange={this.handleChange}
        className={type === 'youtube' ? 'editor' : 'other-editor editor'}
        theme="snow"
      />
    );
  }
}

const mapStateToProps = state => ({
  userId: state.auth.user && state.auth.user.id,
  topicId: state.learn.topic && state.learn.topic.id,
  type: state.learn.resource && state.learn.resource.type
});

export default connect(mapStateToProps)(Editor);
