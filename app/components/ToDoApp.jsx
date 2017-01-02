var React = require('react');

var TodoList = require('TodoList');

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
  render: function() {
    return(
      <div>
      <TodoList todos={this.state.todos}/>
      </div>
    );
  }
});

module.exports = TodoApp;
