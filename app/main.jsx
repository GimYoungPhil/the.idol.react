import React from 'react';
import Router from 'react-router';
import App from './components/App.jsx';

var Route = Router.Route;
var RouteHandler = Router.RouteHanger;

function main() {
  var currentRoute = window.location.hash.substr(1);
  if (!currentRoute) {
    currentRoute = 'idols';
  }
  React.render(<App currentRoute={currentRoute} />, document.body);
}

window.addEventListener('hashchange', main);
main();
