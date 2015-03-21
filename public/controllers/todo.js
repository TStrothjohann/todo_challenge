var ToDo = function(input){
  this.text = input;
  this.done = false;
};




angular
  .module('TodoList')
  .factory('ToDo', ToDo);