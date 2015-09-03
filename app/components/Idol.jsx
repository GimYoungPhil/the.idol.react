import React from 'react';

export default class Idol extends React.Component {
  render() {
    var idol = this.props.idol;
    var idolStyle = {
      backgroundImage: 'url(' + idol.imageLink  + ')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100%',
      height: 300
    };
    return (
      <div className="col-sm-6 col-md-4 col-lg-3">
      <div className="card">
        <img className="card-img-top" style={idolStyle} />
        <div className="card-block">
          <h4 className="card-title">{idol.name}</h4>
          <p className="card-text">{idol.height && idol.height + 'cm '} {idol.weight && idol.weight + 'kg'}</p>
        </div>
      </div>
      </div>
    )
  }
}
