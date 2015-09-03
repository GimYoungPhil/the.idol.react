import React from 'react';
import classNames from 'classnames';

export default class Navitem extends React.Component {

  render() {
    var route = this.props.route;

    var classes = classNames({
      'nav-item': true,
      'active': this.props.currentRoute === route.url
    });
    return (
      <li className={classes}>
        <a className="nav-link" href={'#' + route.url}>{route.name}</a>
      </li>
    )
  }
}
