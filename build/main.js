(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/johnmurray/WORK/MY-GITHUB/reactjs/app/App.js":[function(require,module,exports){
/** @jsx React.DOM */
var React = require('react');

var App = React.createClass({displayName: "App",
  getInitialState: function() {
    return {
      text: 'this is initial state text',
    };
  },

  // update is a custom function we've created
  update: function(e) {
    this.setState({text: e.target.value});
  },

	render: function() {
		return (
			React.createElement("div", null, 
				React.createElement(Widget, {text: this.state.text, update: this.update}), 
				React.createElement(Widget, {text: this.state.text, update: this.update})
			)
		);
	},

});

var Widget  = React.createClass({displayName: "Widget",
	render: function() {
    return (
				React.createElement("div", null, 
					React.createElement("input", {type: "text", onChange: this.props.update}), 
					React.createElement("h1", null, this.props.text)
				)
		);
  },
});

module.exports = App;

},{"react":"react"}],"/Users/johnmurray/WORK/MY-GITHUB/reactjs/app/main.js":[function(require,module,exports){
/** @jsx React.DOM */
var React = require('react');
var App = require('./App.js');
React.render(React.createElement(App, {text: "this is a text value. wow!"}), document.body);

},{"./App.js":"/Users/johnmurray/WORK/MY-GITHUB/reactjs/app/App.js","react":"react"}]},{},["/Users/johnmurray/WORK/MY-GITHUB/reactjs/app/main.js"])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvQXBwLmpzIiwiYXBwL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyoqIEBqc3ggUmVhY3QuRE9NICovXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgQXBwID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIkFwcFwiLFxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0ZXh0OiAndGhpcyBpcyBpbml0aWFsIHN0YXRlIHRleHQnLFxuICAgIH07XG4gIH0sXG5cbiAgLy8gdXBkYXRlIGlzIGEgY3VzdG9tIGZ1bmN0aW9uIHdlJ3ZlIGNyZWF0ZWRcbiAgdXBkYXRlOiBmdW5jdGlvbihlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7dGV4dDogZS50YXJnZXQudmFsdWV9KTtcbiAgfSxcblxuXHRyZW5kZXI6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIFxuXHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFdpZGdldCwge3RleHQ6IHRoaXMuc3RhdGUudGV4dCwgdXBkYXRlOiB0aGlzLnVwZGF0ZX0pLCBcblx0XHRcdFx0UmVhY3QuY3JlYXRlRWxlbWVudChXaWRnZXQsIHt0ZXh0OiB0aGlzLnN0YXRlLnRleHQsIHVwZGF0ZTogdGhpcy51cGRhdGV9KVxuXHRcdFx0KVxuXHRcdCk7XG5cdH0sXG5cbn0pO1xuXG52YXIgV2lkZ2V0ICA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJXaWRnZXRcIixcblx0cmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gKFxuXHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIFxuXHRcdFx0XHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7dHlwZTogXCJ0ZXh0XCIsIG9uQ2hhbmdlOiB0aGlzLnByb3BzLnVwZGF0ZX0pLCBcblx0XHRcdFx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDFcIiwgbnVsbCwgdGhpcy5wcm9wcy50ZXh0KVxuXHRcdFx0XHQpXG5cdFx0KTtcbiAgfSxcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFwcDtcbiIsIi8qKiBAanN4IFJlYWN0LkRPTSAqL1xudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBBcHAgPSByZXF1aXJlKCcuL0FwcC5qcycpO1xuUmVhY3QucmVuZGVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQXBwLCB7dGV4dDogXCJ0aGlzIGlzIGEgdGV4dCB2YWx1ZS4gd293IVwifSksIGRvY3VtZW50LmJvZHkpO1xuIl19
