var $ = require('jQuery');

module.exports = {
  setTodos: function(todos) {
      if($.isArray(todos)) {
        localStorage.setItem('todos', JSON.stringify(todos));
        return todos;
      }
  },
  getTodos: function() {
      var stringTodos = localStorage.getItem('todos');
      var todos = [];

      try {
        todos = JSON.parse(stringTodos);
      } catch (e) {

      }

      return $.isArray(todos) ? todos : [];
  },

  filterTodos: function(todos, showCompleted, searchText) {
    var filteredTodos = todos;


    // Filter by searchText
    if(searchText) {
      filteredTodos = filteredTodos.filter((todo) => {
          var lowerTodo = todo.text.toLowerCase();
        if (!lowerTodo.indexOf(searchText)) return true;
      });
    }

    // Filter by showCompleted
    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    });

    //Sort todos with non-completed first
    filteredTodos.sort((a, b) => {
      if (!a.completed && b.completed){
        return -1;
      } else if (a.completed && !b.completed) {
        return 1;
      } else {
        return 0;
      }
    });

    return filteredTodos;
  }
};
