import React from 'react';
import addons from 'react/addons';

export default class GroupItem extends React.Component {

  render() {
    var group = this.props.group;
    return (
      <tr>
        <td>{this.props.index}</td>
        <td>{group.name}</td>
        <td>{group.company}</td>
        <td>
          <button className="btn btn-secondary-outline btn-sm" onClick={this.props.onGroupInfo}>
            <i className="fa fa-check"></i> 선택
          </button>
        </td>
      </tr>
    )
  }
}
