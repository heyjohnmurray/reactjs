/** @jsx React.DOM */
var React = require('react');

var App = React.createClass({
	render: function() {
		var text = this.props.text;
		return (
			<h1>{text}</h1>
		);
	}

});

module.exports = App;
