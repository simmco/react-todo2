var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var {TodoAdd} = require('TodoAdd');

describe('TodoAdd', () => {
  it('should exist', () => {
    expect(TodoAdd).toExist();
  });


  it('it should dispatch ADD_TODO when valid todo text', () => {
    var action = {
      type: 'ADD_TODO',
      text: 'Check mail'
    }
    var spy = expect.createSpy();
    var todoAddForm = TestUtils.renderIntoDocument(<TodoAdd dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(todoAddForm));

    todoAddForm.refs.todo.value = 'Check mail';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(action);
  });

  it('should not dispatch ADD_TODO when invalid todo text', () => {
    var spy = expect.createSpy();
    var todoAddForm = TestUtils.renderIntoDocument(<TodoAdd dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(todoAddForm));

    todoAddForm.refs.todo.value = '';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
});
