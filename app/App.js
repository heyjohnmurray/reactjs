/** @jsx React.DOM */
var React = require('react');

var PersonTable = React.createClass({
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
      return <PersonRow data={person} key={i} />;
    });

    return <table>{rows}</table>;
  },
});

var PersonRow = React.createClass({
  render: function(){
    return (
      <tr>
        <td>{this.props.data.id}</td>
        <td>{this.props.data.fname}</td>
        <td>{this.props.data.lname}</td>
      </tr>
    );
  },
});

module.exports = PersonTable;
