var React = require('react');

var GroupInfo = React.createClass({

  getInitialState: function() {
    return {
      isRealMode: false
    };
  },

  handleRealMode: function(mode) {
    this.setState({
      isRealMode: mode
    });
  },

  render: function() {
    var group = this.props.group;
    var buttons;

    if (!this.state.isRealMode) {
      buttons = <div>
        <button type="button" className="btn btn-danger-outline" onClick={this.handleRealMode.bind(this, true)}>삭제</button>
        <button type="button" className="btn btn-primary-outline pull-right" onClick={this.props.onModeEdit}>수정</button>
      </div>
    } else {
      buttons = <div>
        <p className="bg-danger">정말 삭제 할까요?</p>
        <button type="button" className="btn btn-secondary-outline" onClick={this.handleRealMode.bind(this, false)}>아니오</button>
        <button type="button" className="btn btn-danger-outline pull-right" onClick={this.props.onGroupDelete}>예</button>
      </div>
    }

    return (
      <div className="card">
        <img className="card-img-top img-responsive" src="https://newcdn.namu.wiki/r/http%3A%2F%2Fwww.fentek-ind.com%2Fimages%2Fhhlite2lrg.jpg" alt="Card image cap" />
        <div className="card-block">
          <h4 className="card-title">{group.name}</h4>
          <p className="card-text">{group.company}</p>
          {buttons}
        </div>
      </div>
    )
  }
});

export default GroupInfo;
