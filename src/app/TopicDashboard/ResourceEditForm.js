import React from 'react';
import PropTypes from 'prop-types';
import { EditButton } from '../styles/common.styles';

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
        <div className="resource-edit-view">
          <EditButton className="resource-item-edit resource-item-controls">
            edit
          </EditButton>
          <div className="elipsis">
            {' '}
            <span className="elipsis-dot" />
            <span className="elipsis-dot" />
            <span className="elipsis-dot" />
          </div>
          <button className="checkbox" id={resource.id} type="button" />

          <form
            id={resource.id}
            className="resource-info"
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
            <span className="resc-uri">
              <p>
                {resource.type === 'youtube'
                  ? `https://www.youtube.com/watch?v=${resource.uri}`
                  : resource.uri}
              </p>
            </span>
            <button type="submit" className="resource-item-save">
              save
            </button>
          </form>
          <button
            type="button"
            resourceid={resource.id}
            className="resource-item-delete resource-item-controls"
          >
            Delete
          </button>
        </div>
      </>
    );
  }
}

export default ResourceEditForm;

ResourceEditForm.propTypes = {
  resource: PropTypes.object.isRequired
};
