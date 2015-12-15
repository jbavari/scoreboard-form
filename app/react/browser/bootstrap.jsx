// ReactDOM.render(
//   <Scoreboard url="/api/scoreboard" pollInterval={2000} />,
//   document.getElementById('content')
// );
// var ReactDOM = require('react-dom');
import React from 'react';
import ReactDOM from 'react-dom';
import Scoreboard from '../component/scoreboard.jsx';
// var Scoreboard = require('../component/scoreboard.jsx');
// var networkData = require("../common/data");
// var TubeTracker = require("../component/tube-tracker.jsx");

window.app = (function() {
  // var requiredFeatures = {
  //   "JSON decoding": window.JSON,
  //   "the selectors API": document.querySelector,
  //   "ES5 array methods": Array.prototype.forEach,
  //   "DOM level 2 events": window.addEventListener,
  //   "the HTML5 history API": window.history.pushState
  // };

  // for (var feature in requiredFeatures) {
  //   if (!requiredFeatures[feature]) {
  //     return alert("Sorry, but your browser does not support " + feature + " so this app won't work properly.");
  //   }
  // }

  // var initialData = JSON.parse(document.getElementById("initial-data").innerHTML);
  return ReactDOM.render(<Scoreboard/>, document.getElementById('content'));
})();
