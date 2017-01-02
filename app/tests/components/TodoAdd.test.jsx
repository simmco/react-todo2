var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoAdd = require('TodoAdd');

describe('TodoAdd', () => {
  it('should exist', () => {
    expect(TodoAdd).toExist();
  });

  it('should call handleAddTodo if valid input entered', () => {
    var spy = expect.createSpy();
    var todoAddForm = TestUtils.renderIntoDocument(<TodoAdd handleAddTodo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(todoAddForm));

    todoAddForm.refs.todo.value = 'Washing up';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith('Washing up');
  });

  it('should not call handleAddTodo if invalid input entered', () => {
    var spy = expect.createSpy();
    var todoAddForm = TestUtils.renderIntoDocument(<TodoAdd handleAddTodo={spy}/>);
    var $el = $(ReactDOM.findDOMNode(todoAddForm));

    todoAddForm.refs.todo.value = '';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
});
