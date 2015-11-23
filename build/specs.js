(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/johnmurray/WORK/MY-GITHUB/reactjs/app/App.js":[function(require,module,exports){
/** @jsx React.DOM */
var React = require('react');

var ReactMixin = {
  componentWillMount: function(){
    console.log('will mount');
  },
}

var App = React.createClass({displayName: "App",
  render: function(){
    return (
      React.createElement("div", null, 
        React.createElement(Button, {txt: "this is the button"}), 
        React.createElement("br", null), 
        React.createElement(Label, {txt: "this is the label"})
      )
    )
  },
});

var Button = React.createClass({displayName: "Button",
  mixins:[ReactMixin],
  render: function(){
    return React.createElement("button", null, this.props.txt)
  }
});

var Label = React.createClass({displayName: "Label",
  mixins:[ReactMixin],
  render: function(){
    return React.createElement("label", null, this.props.txt)
  }
});

module.exports = App;

},{"react":"react"}],"/Users/johnmurray/WORK/MY-GITHUB/reactjs/specs/App-spec.js":[function(require,module,exports){
var App = require('./../app/App.js');
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

describe("App", function() {

  it("should render text: Hello world!", function() {
    var app = TestUtils.renderIntoDocument(React.createElement(App));
    expect(React.findDOMNode(app).textContent).toEqual('Hello world!');
  });

});


},{"./../app/App.js":"/Users/johnmurray/WORK/MY-GITHUB/reactjs/app/App.js","react/addons":"react/addons"}]},{},["/Users/johnmurray/WORK/MY-GITHUB/reactjs/specs/App-spec.js"])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvQXBwLmpzIiwic3BlY3MvQXBwLXNwZWMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKiogQGpzeCBSZWFjdC5ET00gKi9cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBSZWFjdE1peGluID0ge1xuICBjb21wb25lbnRXaWxsTW91bnQ6IGZ1bmN0aW9uKCl7XG4gICAgY29uc29sZS5sb2coJ3dpbGwgbW91bnQnKTtcbiAgfSxcbn1cblxudmFyIEFwcCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJBcHBcIixcbiAgcmVuZGVyOiBmdW5jdGlvbigpe1xuICAgIHJldHVybiAoXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwge3R4dDogXCJ0aGlzIGlzIHRoZSBidXR0b25cIn0pLCBcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJyXCIsIG51bGwpLCBcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChMYWJlbCwge3R4dDogXCJ0aGlzIGlzIHRoZSBsYWJlbFwifSlcbiAgICAgIClcbiAgICApXG4gIH0sXG59KTtcblxudmFyIEJ1dHRvbiA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtkaXNwbGF5TmFtZTogXCJCdXR0b25cIixcbiAgbWl4aW5zOltSZWFjdE1peGluXSxcbiAgcmVuZGVyOiBmdW5jdGlvbigpe1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIG51bGwsIHRoaXMucHJvcHMudHh0KVxuICB9XG59KTtcblxudmFyIExhYmVsID0gUmVhY3QuY3JlYXRlQ2xhc3Moe2Rpc3BsYXlOYW1lOiBcIkxhYmVsXCIsXG4gIG1peGluczpbUmVhY3RNaXhpbl0sXG4gIHJlbmRlcjogZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImxhYmVsXCIsIG51bGwsIHRoaXMucHJvcHMudHh0KVxuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBBcHA7XG4iLCJ2YXIgQXBwID0gcmVxdWlyZSgnLi8uLi9hcHAvQXBwLmpzJyk7XG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdC9hZGRvbnMnKTtcbnZhciBUZXN0VXRpbHMgPSBSZWFjdC5hZGRvbnMuVGVzdFV0aWxzO1xuXG5kZXNjcmliZShcIkFwcFwiLCBmdW5jdGlvbigpIHtcblxuICBpdChcInNob3VsZCByZW5kZXIgdGV4dDogSGVsbG8gd29ybGQhXCIsIGZ1bmN0aW9uKCkge1xuICAgIHZhciBhcHAgPSBUZXN0VXRpbHMucmVuZGVySW50b0RvY3VtZW50KFJlYWN0LmNyZWF0ZUVsZW1lbnQoQXBwKSk7XG4gICAgZXhwZWN0KFJlYWN0LmZpbmRET01Ob2RlKGFwcCkudGV4dENvbnRlbnQpLnRvRXF1YWwoJ0hlbGxvIHdvcmxkIScpO1xuICB9KTtcblxufSk7XG5cbiJdfQ==
