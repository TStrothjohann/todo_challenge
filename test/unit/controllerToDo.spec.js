describe('A ToDo', function(){
beforeEach(module('TodoList'));

beforeEach(function() {
  inject(function($injector) {
    todoFactory = $injector.get('ToDo');
  });
});

var firstToDo;

  beforeEach(function() {
    firstToDo = new todoFactory("test todo");
  });

  it('has a text when created', function(){
    expect(firstToDo.text).toEqual("test todo");
  });

  it('is undone when created', function(){
    expect(firstToDo.done).toEqual(false);
  });

  it('can be done', function() {
    firstToDo.markAsDone();
    expect(firstToDo.done).toEqual(true);
  });
});


describe('The TodoList Controller', function(){

  beforeEach(module('TodoList'));
  var scope, ctrl;

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    ctrl = $controller('ListController', {
        $scope: scope
    });
  }));

  it("can add a new ToDo to the list", function(){
    scope.addTodo()
    expect(scope.todos.length).toEqual(1)
  });
});

