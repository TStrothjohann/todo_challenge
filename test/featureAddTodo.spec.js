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
    element(by.model('newtodo')).sendKeys("My first ToDo");
    element(by.id('addtodo')).click();
    expect(element(by.binding('todo.text')).getText()).toEqual("My first ToDo");
  });

  it('can mark a todo as done', function() {
    element(by.model('newtodo')).sendKeys("This will be done");
    element(by.model('markAsDone')).click();
    expect(element(by.binding('todo.status'))).toEqual(true);
  });

});

