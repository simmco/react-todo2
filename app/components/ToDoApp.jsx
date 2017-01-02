var React = require('react');

var TodoSearch = require('TodoSearch');
var TodoList = require('TodoList');
var TodoAdd = require('TodoAdd');
var uuid = require('uuid');

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: uuid(),
          text: 'Walk the dog'
        },
        {
          id: uuid(),
          text: 'Clean the yard'
        },
        {
          id: uuid(),
          text: 'Do the dishes'
        },
        {
          id: uuid(),
          text: 'Cook dinner'
        }
      ]
    };
  },
  handleSearchTodo: function(showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
    console.log(this.state.searchText);
    console.log(this.state.showCompleted);
  },
  handleAddTodo: function(text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text
        }
      ]
    });
  },
  render: function() {
    return(
      <div>
      <TodoSearch handleSearchTodo={this.handleSearchTodo}/>
      <TodoList todos={this.state.todos}/>
      <TodoAdd handleAddTodo={this.handleAddTodo}/>
      </div>
    );
  }
});

module.exports = TodoApp;
