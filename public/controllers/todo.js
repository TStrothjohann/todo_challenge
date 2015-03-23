var ToDo = function(){
  var TodoConstructor = function(input){
    this.text = input;
    this.done = false;
    this.markAsDone = function() {
      this.done = true;
    };
  };
  return TodoConstructor;
};

angular
  .module('TodoList')
  .factory('ToDo', ToDo);