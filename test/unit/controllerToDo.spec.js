describe('A ToDo', function(){

  it('has a text', function(){
    var firstToDo = new ToDo("This is a toDo");
    expect(firstToDo.text).toEqual("This is a toDo");
  });

  it('has is undone when created', function(){
    var firstToDo = new ToDo("This is a toDo");
    expect(firstToDo.done).toEqual(false);
  });


});