var React = require('react');

var GroupEdit = React.createClass({

  handleSubmit(e) {
    e.preventDefault();
    var name = React.findDOMNode(this.refs.groupName).value.trim();
    var company = React.findDOMNode(this.refs.groupCompany).value.trim();
    if (!name || !company) {
      return;
    }

    this.props.onGroupEdit({name: name, company: company});

    React.findDOMNode(this.refs.groupName).value = '';
    React.findDOMNode(this.refs.groupCompany).value = '';
    return;
  },

  render: function() {
    var group = this.props.group;

    return (
      <div className="card">
        <div className="card-header">
          Group 수정
        </div>
        <div className="card-block">
          <form onSubmit={this.handleSubmit}>
            <fieldset className="form-group">
              <label htmlFor="groupName">그룹명</label>
              <input type="text" className="form-control" ref="groupName" placeholder="그룹명" defaultValue={group.name}></input>
            </fieldset>
            <fieldset className="form-group">
              <label htmlFor="groupCompany">소속사</label>
              <input type="text" className="form-control" ref="groupCompany" placeholder="소속사" defaultValue={group.company}></input>
            </fieldset>
            <button type="button" className="btn btn-danger-outline" onClick={this.props.onModeInfo}>취소</button>
            <button type="submit" className="btn btn-primary-outline pull-right" onClick={this.handleSubmit}>수정</button>
          </form>
        </div>
      </div>
    )
  }
});

export default GroupEdit;
