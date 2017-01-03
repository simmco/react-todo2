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
          text: 'Walk the dog',
          completed: false
        },
        {
          id: uuid(),
          text: 'Clean the yard',
          completed: true

        },
        {
          id: uuid(),
          text: 'Do the dishes',
          completed: true

        },
        {
          id: uuid(),
          text: 'Cook dinner',
          completed: false

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
  handleToggle: function(id) {
    var updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }

      return todo;
    });

    this.setState({todos: updatedTodos});
  },
  handleAddTodo: function(text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text,
          completed: false
        }
      ]
    });
  },
  render: function() {
    return(
      <div>
      <TodoSearch handleSearchTodo={this.handleSearchTodo}/>
      <TodoList todos={this.state.todos} onToggle={this.handleToggle}/>
      <TodoAdd handleAddTodo={this.handleAddTodo}/>
      </div>
    );
  }
});

module.exports = TodoApp;
