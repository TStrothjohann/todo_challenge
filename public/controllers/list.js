var ListController = function($scope, ToDo) {
  $scope.todos = [];
  $scope.newToDo = null;

  $scope.addTodo = function(){

    var newi = function(){new ToDo};
    newi.text = $scope.newToDo
    $scope.todos.push(newi);
    $scope.newToDo = null;
  };

  $scope.deleteTodo = function(index){
    $scope.todos.splice(index,1);
  };
};

angular
  .module('TodoList')
  .controller('ListController', ListController)