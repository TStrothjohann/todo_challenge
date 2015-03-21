var ListController = function($scope) {
  this.todos = [
    {"id": 1,
     'text': 'My first ToDo',
     'done': false
   },
    {"id": 2,
     'text': 'My second ToDo',
     'done': false
   },
  ];

  this.addTodo = function(){
    console.log("hurray");

    // $scope.todos.push(todo) 
  };
};

angular
  .module('TodoList')
  .controller('ListController', ListController)
    
  
