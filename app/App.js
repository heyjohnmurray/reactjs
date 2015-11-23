/** @jsx React.DOM */
var React = require('react');

var ReactMixin = {
  componentWillMount: function(){
    console.log('will mount');
  },
}

var App = React.createClass({
  render: function(){
    return (
      <div>
        <Button txt="this is the button" />
        <br />
        <Label txt="this is the label" />
      </div>
    )
  },
});

var Button = React.createClass({
  mixins:[ReactMixin],
  render: function(){
    return <button>{this.props.txt}</button>
  }
});

var Label = React.createClass({
  mixins:[ReactMixin],
  render: function(){
    return <label>{this.props.txt}</label>
  }
});

module.exports = App;
