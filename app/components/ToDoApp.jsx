var React = require('react');

var TodoList = require('TodoList');
var TodoAdd = require('TodoAdd');

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
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
  handleAddTodo: function(text) {
    alert('new todo:' + text);
  },
  render: function() {
    return(
      <div>
      <TodoList todos={this.state.todos}/>
      <TodoAdd handleAddTodo={this.handleAddTodo}/>
      </div>
    );
  }
});

module.exports = TodoApp;
