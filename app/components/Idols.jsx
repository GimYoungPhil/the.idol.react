import React from 'react';
import Idol from './Idol.jsx';
import $ from 'jquery';

export default React.createClass({

  getInitialState() {
    return {
      idols: []
    };
  },

  componentDidMount() {
    $.get('http://the-idol-back-end.herokuapp.com/api/idols', function(result) {
      this.setState({
        idols: result
      });
    }.bind(this));
  },

  render() {

    var idols = this.state.idols.map((idol) => {
      return (
        <Idol key={idol._id} idol={idol}></Idol>
      )
    });

    return (
      <div className="container">
        <div className='card-box'>
            {idols}
        </div>
      </div>
    );
  }
});
