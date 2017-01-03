var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
  beforeEach(() => {
    localStorage.removeItem('todos');
  });
  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('setTodos', () => {
    it('should set valid todos array', () => {
      var todos = [{
        id: 4,
        text: 'Some value',
        completed: false
      }];
      TodoAPI.setTodos(todos);

      var actualTodos = JSON.parse(localStorage.getItem('todos'));

      expect(actualTodos).toEqual(todos);
    });

    it('should not set invalid todos array', () => {
      var badTodos = {a: 'b'};
      TodoAPI.setTodos(badTodos);

      expect(localStorage.getItem('todos')).toBe(null);
    });

  });

  describe('getTodos', () => {
    it('should get valid todos array', () => {
      var todos = [{
        id: 4,
        text: 'Some value',
        completed: false
      }];
      localStorage.setItem('todos', JSON.stringify(todos));

      var getTodos = TodoAPI.getTodos();

      expect(getTodos).toEqual(todos);
    });

    it('should not get invalid todos array', () => {

      var getTodos = TodoAPI.getTodos();
      expect(getTodos).toEqual([]);
    });

  });
});
