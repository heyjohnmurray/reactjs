/** @jsx React.DOM */
var React = require('react');

var App = React.createClass({
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
			<div>
				<Widget text={this.state.text} update={this.update} />
				<Widget text={this.state.text} update={this.update} />
			</div>
		);
	},

});

var Widget  = React.createClass({
	render: function() {
    return (
				<div>
					<input type='text' onChange={this.props.update} />
					<h1>{this.props.text}</h1>
				</div>
		);
  },
});

module.exports = App;
