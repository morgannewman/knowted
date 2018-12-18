import React from 'react';
import PropTypes from 'prop-types';

export class ResourceEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.value = React.createRef();
    this.state = {
      value: this.props.resource.title,
      uri: this.props.resource.uri
    };
  }

  render() {
    const { resource, handleUpdate } = this.props;
    return (
      <div>
        <form
          id={resource.id}
          className="resource-item"
          onSubmit={e => handleUpdate(e, this.state.value, this.state.uri)}
        >
          <input
            type="text"
            name={resource.title}
            defaultValue={this.state.value}
            onChange={e => this.setState({ value: e.target.value })}
          />
          {/* <input
            type="url"
            name={resource.uri}
            defaultValue={this.state.uri}
            onChange={e => this.setState({ uri: e.target.value })}
          /> */}
          <button type="submit" className="resource-item-edit">
            update
          </button>
        </form>
      </div>
    );
  }
}

export default ResourceEditForm;

ResourceEditForm.propTypes = {
  resource: PropTypes.object.isRequired
};
