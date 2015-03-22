var ToDo = function(){
  var TodoFactory = {};

  TodoFactory.text = null;
  TodoFactory.done = false;
  TodoFactory.markAsDone = function() {
    TodoFactory.done = true;
  };
  return TodoFactory;
};




angular
  .module('TodoList')
  .factory('ToDo', ToDo);