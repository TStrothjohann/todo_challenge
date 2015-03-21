describe('TodoList page', function() {
  it('has a title', function() {
    browser.get('http://localhost:3000/');
    expect(browser.getTitle()).toEqual('Todo List');
  });
});

describe('The User', function() {

  it('can create a todo', function(){
    browser.get('http://localhost:3000/');
    element(by.model('newtodo')).sendKeys("My first ToDo");
    element(by.id('addtodo')).click();
    expect(element(by.binding('todo.text')).getText()).toEqual("My first ToDo");
  });

});

