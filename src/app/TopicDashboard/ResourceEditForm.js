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
      <>
        <div className="elipsis">
          {' '}
          <span className="elipsis-dot" />
          <span className="elipsis-dot" />
          <span className="elipsis-dot" />
        </div>
        <div className="resource-info">
          <form
            id={resource.id}
            className="resource-edit-form"
            onSubmit={e =>
              handleUpdate(e, this.state.value, this.state.uri, resource.title)
            }
          >
            <label htmlFor="title update" />
            <input
              type="text"
              name={resource.title}
              defaultValue={this.state.value}
              onChange={e => this.setState({ value: e.target.value })}
            />
            <button type="submit" className="resource-item-save">
              <p> save</p>
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default ResourceEditForm;

ResourceEditForm.propTypes = {
  resource: PropTypes.object.isRequired
};
