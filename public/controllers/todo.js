var ToDo = function(){
  var TodoConstructor = function(input){
    this.text = input;
    this.done = false;
    this.switchDone = function() {
      switch(this.done){
      case true:
        this.done = false;
        break;
      case false:
        this.done = true;
        break;
      }   
    };
  };
  return TodoConstructor;
};

angular
  .module('TodoList')
  .factory('ToDo', ToDo);