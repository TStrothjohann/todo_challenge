describe('TodoList page', function() {
  it('has a title', function() {
    browser.get('http://localhost:3000/');
    expect(browser.getTitle()).toEqual('Todo List');
  });
});

describe('The User', function() {

  beforeEach(function(){
    browser.get('http://localhost:3000/');    
  });

  it('can create a todo', function(){
    element(by.model('newToDo')).sendKeys("My first ToDo");
    element(by.id('addtodo')).click();
    expect(element.all(by.css('.todo-text')).last().getText()).toEqual("My first ToDo");
  });

  it('can delete a todo', function() {
    element(by.model('newToDo')).sendKeys("This will be deleted");
    element(by.id('addtodo')).click();
    element(by.css('.delete-todo')).click();
    expect(element.all(by.binding('todo.text')).count()).toEqual(0);
  });

  it("can mark ToDos as done", function(){
    element(by.model('newToDo')).sendKeys("My first ToDo");
    element(by.id('addtodo')).click();
    element(by.css('.mark-as-done')).click();
    expect(element.all(by.css('.list-group-item')).last().getAttribute('class')).toMatch(/disabled/);
  });

});

