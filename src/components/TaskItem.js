import React, {Component} from 'react';

class TaskItem extends Component {
  render(){
    var { name, index } = this.props;
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{name}</td>
        <td className="text-center">
          <span className="label label-danger">Active</span>
        </td>
        <td className="text-center">
          <button type="button" className="btn btn-warning">
            <span className="fa fa-pencil mr-5"></span>Edit
          </button>
          &nbsp;
          <button type="button" className="btn btn-warning">
            <span className="fa fa-pencil mr-5"></span>Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default TaskItem;