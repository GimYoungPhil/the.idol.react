import React from 'react';
import Navbar from './Navbar.jsx';
import Idols from './Idols.jsx';
import Groups from './Groups.jsx';
import About from './About.jsx';

const routes = [
  { id: '1', name: 'Idol', url: 'idols' },
  { id: '2', name: 'Group', url: 'groups' },
  { id: '3', name: 'About', url: 'about' },
];

export default class App extends React.Component {
  render() {
    var Child;
    switch (this.props.currentRoute) {
      case 'idols':
        Child = Idols;
        break;
      case 'groups':
        Child = Groups;
        break;
      case 'about':
        Child = About;
        break;
      default:

    }
    return (
      <div>
        <Navbar currentRoute={this.props.currentRoute} routes={routes} />
        <Child />
      </div>
    )
  }
}
