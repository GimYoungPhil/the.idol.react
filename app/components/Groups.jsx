var React = require('react');
var GroupItem = require('./GroupItem.jsx');
var GroupInfo = require('./GroupInfo.jsx');
var GroupNew = require('./GroupNew.jsx');
var GroupEdit = require('./GroupEdit.jsx');
var $ = require('jquery');

const MODE_NONE = 'none';
const MODE_NEW  = 'new';
const MODE_INFO = 'info';
const MODE_EDIT = 'edit';

var Groups = React.createClass({

  getInitialState: function() {
    return {
      groups: [],
      currentMode: MODE_NONE,
      selectedGroup: null
    };
  },

  componentDidMount: function() {
    $.ajax({
      url: 'http://the-idol-back-end.herokuapp.com/api/groups',
      dataType: 'json',
      type: 'GET',
      success: function(data) {
        this.setState({
          groups: data
        });
      }.bind(this),
      error: function() {

      }.bind(this)
    })
  },

  handleGroupNew: function(group) {
    $.ajax({
      url: 'http://the-idol-back-end.herokuapp.com/api/groups',
      dataType: 'json',
      type: 'POST',
      data: group,
      success: function(data) {
        this.setState({
          groups: this.state.groups.concat([data]),
          currentMode: MODE_INFO,
          selectedGroup: data
        });
      }.bind(this),
      error: function(xhr, status, err) {
        console.error('/api/groups', status, err.toString());
      }.bind(this)
    });
  },

  handleGroupDelete: function() {
    var selectedGroup = this.state.selectedGroup;
    $.ajax({
      url: 'http://the-idol-back-end.herokuapp.com/api/groups' + '/' + selectedGroup._id,
      dataType: 'json',
      type: 'DELETE',
      success: function(data) {

        var groups = this.state.groups.filter(function(group) {
          return selectedGroup !== group;
        });

        this.setState({
          groups: groups,
          currentMode: MODE_NONE
        });
      }.bind(this),
      error: function(xhr, status, err) {
        console.error('/api/groups', status, err.toString());
      }.bind(this)
    });
  },

  handleGroupEdit: function(group) {
    var selectedGroup = this.state.selectedGroup;
    $.ajax({
      url: 'http://the-idol-back-end.herokuapp.com/api/groups' + '/' + selectedGroup._id,
      dataType: 'json',
      type: 'PUT',
      data: group,
      success: function(data) {

        var groups = this.state.groups.map(function(group) {
          if (selectedGroup === group) {
            return data;
          } else {
            return group;
          }
        });

        this.setState({
          groups: groups,
          currentMode: MODE_INFO,
          selectedGroup: data
        });
      }.bind(this),
      error: function(xhr, status, err) {
        console.error('/api/groups', status, err.toString());
      }.bind(this)
    });
  },

  handleMode: function(mode, item) {
    mode = mode || MODE_NONE;
    item = item || this.state.selectedGroup;

    this.setState({
      currentMode: mode,
      selectedGroup: item
    });
  },

  render: function() {
    var groupSub;
    if (this.state.currentMode === MODE_NEW) {
      groupSub = <GroupNew onGroupNew={this.handleGroupNew}
                           onModeCancel={this.handleMode.bind(this, MODE_NONE)} />;
    } else if (this.state.currentMode === MODE_INFO) {
      groupSub = <GroupInfo group={this.state.selectedGroup}
                            onGroupDelete={this.handleGroupDelete}
                            onModeEdit={this.handleMode.bind(this, MODE_EDIT, this.state.selectedGroup)} />;
    } else if (this.state.currentMode === MODE_EDIT) {
      groupSub = <GroupEdit group={this.state.selectedGroup}
                            onModeInfo={this.handleMode.bind(this, MODE_INFO, this.state.selectedGroup)}
                            onGroupEdit={this.handleGroupEdit} />;
    }

    var items = this.state.groups.map((item, i) => {
      return (
        <GroupItem key={item._id}
                   group={item}
                   index={i+1}
                   onGroupInfo={this.handleMode.bind(this, MODE_INFO, item)} />
      )
    });

    return (
      <div className="container">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-header">
              그룹 리스트
            </div>

            <table className="table">
              <thead className="thead-default">
                <tr>
                  <th>#</th>
                  <th>그룹명</th>
                  <th>소속사</th>
                  <th>
                    <button className="btn btn-danger btn-sm" onClick={this.handleMode.bind(this, MODE_NEW)}>
                      <i className="fa fa-plus"></i> 추가
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody>
                {items}
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-lg-6">
          {groupSub}
        </div>
      </div>
    )
  }
});

export default Groups;
