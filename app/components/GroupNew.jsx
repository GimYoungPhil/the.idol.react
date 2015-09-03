var React = require('react');

var GroupNew = React.createClass({

  handleSubmit(e) {
    e.preventDefault();
    var name = React.findDOMNode(this.refs.groupName).value.trim();
    var company = React.findDOMNode(this.refs.groupCompany).value.trim();
    if (!name || !company) {
      return;
    }

    this.props.onGroupNew({name: name, company: company});

    React.findDOMNode(this.refs.groupName).value = '';
    React.findDOMNode(this.refs.groupCompany).value = '';
    return;
  },

  render: function() {
    return (
      <div className="card">
        <div className="card-header">
          New Group 입력
        </div>
        <div className="card-block">
          <form onSubmit={this.handleSubmit}>
            <fieldset className="form-group">
              <label htmlFor="groupName">그룹명</label>
              <input type="text" className="form-control" ref="groupName" placeholder="그룹명"></input>
            </fieldset>
            <fieldset className="form-group">
              <label htmlFor="groupCompany">소속사</label>
              <input type="text" className="form-control" ref="groupCompany" placeholder="소속사"></input>
            </fieldset>
            <button type="button" className="btn btn-secondary-outline" onClick={this.props.onModeCancel}>취소</button>
            <button type="submit" className="btn btn-primary-outline pull-right">등록</button>
          </form>
        </div>
      </div>
    )
  }
});

export default GroupNew;
