import React from 'react';
import PropTypes from 'prop-types';

//TODO:remove console.logs
export class ResourceEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.value = React.createRef();
    this.state = {
      value: this.props.resource.title
    };
  }

  handleUpdate = e => {
    e.preventDefault();
    const newTitle = e.currentTarget.getElementsByTagName('INPUT')[0].value;
    const id = e.target.getAttribute('resourceid');
    if (newTitle === undefined) {
      return;
    }
    console.log(`Updates resource with id: ${id} and name ${newTitle.trim()}`);
    this.setState({ editing: !this.state.editing });
  };
  render() {
    const { resource } = this.props;
    return (
      <div>
        <form
          resourceid={resource.id}
          className="resource-item"
          onSubmit={this.handleUpdate}
        >
          <input
            type="text"
            name={resource.title}
            // value='{resource.title}'
            value={this.state.value}
            onChange={e => this.setState({ value: e.target.value })}
          />
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
