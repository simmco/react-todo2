var React = require('react');

var TodoSearch = React.createClass({

  searchChanged: function() {
    var value = this.refs.todo.value;
    var showCompleted = this.refs.showCompleted.checked;

    this.props.handleSearchTodo(showCompleted, value);

  },
  render: function() {
    return(
      <div className="container__header">
        <div>
          <input type="search" ref="todo" placeholder="Search Todo" onChange={this.searchChanged}/>
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showCompleted" onChange={this.searchChanged}/>
            Show completed Todos
          </label>
        </div>
      </div>
    );
  }
});

module.exports = TodoSearch;
