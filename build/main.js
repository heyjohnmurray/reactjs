(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/johnmurray/WORK/MY-GITHUB/reactjs/app/App.js":[function(require,module,exports){
/** @jsx React.DOM */
var React = require('react');

var PersonTable = React.createClass({displayName: "PersonTable",
  getInitialState: function(){
    return {
      data: [
        {id: 1, fname: 'John', lname: 'Murray'},
        {id: 2, fname: 'Wyatt', lname: 'Murray'},
        {id: 3, fname: 'McKenzie', lname: 'Murray'}
      ],
    };
  },

  render: function(){
    var rows = this.state.data.map(function(person, i){
      return React.createElement(PersonRow, {data: person, key: i});
    });

    return React.createElement("table", null, rows);
  },
});

var PersonRow = React.createClass({displayName: "PersonRow",
  render: function(){
    return (
      React.createElement("tr", null, 
        React.createElement("td", null, this.props.data.id), 
        React.createElement("td", null, this.props.data.fname), 
        React.createElement("td", null, this.props.data.lname)
      )
    );
  },
});

module.exports = PersonTable;

},{"react":"react"}],"/Users/johnmurray/WORK/MY-GITHUB/reactjs/app/main.js":[function(require,module,exports){
/** @jsx React.DOM */
var React = require('react');
var PersonTable = require('./App.js');
React.render(React.createElement(PersonTable, null), document.body);

},{"./App.js":"/Users/johnmurray/WORK/MY-GITHUB/reactjs/app/App.js","react":"react"}]},{},["/Users/johnmurray/WORK/MY-GITHUB/reactjs/app/main.js"])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvQXBwLmpzIiwiYXBwL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKiogQGpzeCBSZWFjdC5ET00gKi9cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBQZXJzb25UYWJsZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJQZXJzb25UYWJsZVwiLFxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGE6IFtcbiAgICAgICAge2lkOiAxLCBmbmFtZTogJ0pvaG4nLCBsbmFtZTogJ011cnJheSd9LFxuICAgICAgICB7aWQ6IDIsIGZuYW1lOiAnV3lhdHQnLCBsbmFtZTogJ011cnJheSd9LFxuICAgICAgICB7aWQ6IDMsIGZuYW1lOiAnTWNLZW56aWUnLCBsbmFtZTogJ011cnJheSd9XG4gICAgICBdLFxuICAgIH07XG4gIH0sXG5cbiAgcmVuZGVyOiBmdW5jdGlvbigpe1xuICAgIHZhciByb3dzID0gdGhpcy5zdGF0ZS5kYXRhLm1hcChmdW5jdGlvbihwZXJzb24sIGkpe1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUGVyc29uUm93LCB7ZGF0YTogcGVyc29uLCBrZXk6IGl9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGFibGVcIiwgbnVsbCwgcm93cyk7XG4gIH0sXG59KTtcblxudmFyIFBlcnNvblJvdyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJQZXJzb25Sb3dcIixcbiAgcmVuZGVyOiBmdW5jdGlvbigpe1xuICAgIHJldHVybiAoXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidHJcIiwgbnVsbCwgXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiLCBudWxsLCB0aGlzLnByb3BzLmRhdGEuaWQpLCBcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRkXCIsIG51bGwsIHRoaXMucHJvcHMuZGF0YS5mbmFtZSksIFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGRcIiwgbnVsbCwgdGhpcy5wcm9wcy5kYXRhLmxuYW1lKVxuICAgICAgKVxuICAgICk7XG4gIH0sXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBQZXJzb25UYWJsZTtcbiIsIi8qKiBAanN4IFJlYWN0LkRPTSAqL1xudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBQZXJzb25UYWJsZSA9IHJlcXVpcmUoJy4vQXBwLmpzJyk7XG5SZWFjdC5yZW5kZXIoUmVhY3QuY3JlYXRlRWxlbWVudChQZXJzb25UYWJsZSwgbnVsbCksIGRvY3VtZW50LmJvZHkpO1xuIl19
