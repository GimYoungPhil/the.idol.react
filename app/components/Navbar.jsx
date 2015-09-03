import React from 'react';
import Navitem from './Navitem.jsx'

export default class Navbar extends React.Component {

  render() {
    return (
      <nav className="navbar navbar-fixed-top navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand" href="/the.idol">the.idol</a>
          <ul className="nav navbar-nav pull-right">
            {this.props.routes.map((route) => {
              return (
                <Navitem key={route.id} currentRoute={this.props.currentRoute} route={route} />
              )
            })}
          </ul>
        </div>
      </nav>
    )
  }
}
