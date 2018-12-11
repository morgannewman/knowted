import React from 'react';
import PropTypes from 'prop-types';

//TODO:remove console.logs
export class ResourceEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.value = React.createRef();
    this.state = {
      titleValue: this.props.resource.title,
      uri: this.props.resource.uri
    };
  }

  render() {
    const { resource, handleUpdate } = this.props;
    return (
      <div>
        <form
          resourceid={resource.id}
          className="resource-item"
          onSubmit={handleUpdate}
        >
          <input
            type="text"
            name={resource.title}
            value={this.state.titleValue}
            onChange={e => this.setState({ value: e.target.value })}
          />
          <button type="submit" className="resource-item-edit">
            update
          </button>
        </form>
        <input
          type="text"
          name={resource.uri}
          value={this.state.uri}
          onChange={e => this.setState({ uri: e.target.value })}
        />
      </div>
    );
  }
}

export default ResourceEditForm;

ResourceEditForm.propTypes = {
  resource: PropTypes.object.isRequired
};
