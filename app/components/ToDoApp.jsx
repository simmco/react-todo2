var React = require('react');
var uuid = require('uuid');
var moment = require('moment');

var TodoSearch = require('TodoSearch');
import TodoList from 'TodoList';
import TodoAdd from 'TodoAdd';
var TodoAPI = require('TodoAPI');

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      showCompleted: false,
      searchText: '',
      todos: TodoAPI.getTodos()
    };
  },
  componentDidUpdate: function() {
    TodoAPI.setTodos(this.state.todos);
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
          text: text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ]
    });
  },
  render: function() {
    var {todos, showCompleted, searchText} = this.state;
    var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

    return(
      <div>
        <h1 className="page-title">Todo App</h1>

        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch handleSearchTodo={this.handleSearchTodo}/>
              <TodoList />
              <TodoAdd handleAddTodo={this.handleAddTodo}/>
            </div>
          </div>

        </div>
      </div>
    );
  }
});

module.exports = TodoApp;
