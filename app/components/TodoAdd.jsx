var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var TodoAdd = React.createClass({
  addClicked: function(e) {
    e.preventDefault();
    var {dispatch} = this.props;
    var value = this.refs.todo.value;
    console.log(value);
    if(value !== '') {
      this.refs.todo.value = '';
      dispatch(actions.addTodo(value));
    } else {
      this.refs.todo.focus();
    }
  },
  render: function() {
    return(
      <div className="container__footer">
        <form ref="form" onSubmit={this.addClicked}>
          <input type="text" ref="todo" placeholder="Add Todo"/>
          <button className="button expanded">Add</button>
        </form>
      </div>
    );
  }
});

export default connect()(TodoAdd);
