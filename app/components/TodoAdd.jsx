var React = require('react');

var TodoAdd = React.createClass({
  addClicked: function(e) {
    e.preventDefault();

    var value = this.refs.todo.value;
    console.log(value);
    if(value !== '') {
      this.refs.todo.value = '';
      this.props.handleAddTodo(value);
    } else {
      this.refs.todo.focus();
    }
  },
  render: function() {
    return(
      <div>
        <form ref="form" onSubmit={this.addClicked}>
          <input type="text" ref="todo" placeholder="Add Todo"/>
          <button>Search</button>
        </form>
      </div>
    );
  }
});

module.exports = TodoAdd;