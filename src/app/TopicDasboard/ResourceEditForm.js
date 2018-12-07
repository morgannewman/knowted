import React from 'react';
import PropTypes from 'prop-types';

//TODO:remove console.logs
export class ResourceEditForm extends React.Component {
  static propTypes = {
    resource: PropTypes.object.isRequired
  };
  handleSubmit = e => {
    const newTitle = e.currentTarget.getElementsByTagName('INPUT')[0].value;
    const id = e.target.getAttribute('resourceid');
    if (newTitle === undefined) {
      return;
    }
    console.log(`Updates resource with id: ${id} and name ${newTitle.trim()}`);
  };
  render() {
    const { resource, handleUpdate } = this.props;
    return (
      <div>
        <form
          resourceid={resource.id}
          className="resource-item"
          onSubmit={e => {
            e.preventDefault();
            this.handleSubmit(e);
            handleUpdate();
          }}
        >
          <input type="text" name={resource.title} />
          <button type="submit" className="resource-item-edit">
            update
          </button>
        </form>
        <a href={resource.uri}>{resource.uri}</a>
      </div>
    );
  }
}

export default ResourceEditForm;

ResourceEditForm.propTypes = {
  resource: PropTypes.object.isRequired
};
