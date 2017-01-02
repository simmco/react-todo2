var React = require('react');

var TodoSearch = require('TodoSearch');
var TodoList = require('TodoList');
var TodoAdd = require('TodoAdd');

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        },
        {
          id: 2,
          text: 'Clean the yard'
        },
        {
          id: 3,
          text: 'Do the dishes'
        },
        {
          id: 4,
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
    alert('new todo:' + text);
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
