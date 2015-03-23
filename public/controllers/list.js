var ListController = function($scope, ToDo) {
  $scope.todos = [];
  $scope.newToDo = null;

  $scope.addTodo = function(){
    var newitem = new ToDo($scope.newToDo);
    $scope.todos.push(newitem);
    $scope.newToDo = null;
  };

  $scope.deleteTodo = function(index){
    $scope.todos.splice(index,1);
  };
};

angular
  .module('TodoList')
  .controller('ListController', ListController)