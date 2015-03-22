describe('A ToDo', function(){

var firstToDo;

  beforeEach(function() {
    firstToDo = new ToDo;
  });


  it('can have a text', function(){
    expect(firstToDo.text).toBeDefined;
  });

  it('has is undone when created', function(){
    expect(firstToDo.done).toEqual(false);
  });

  it('can be done', function() {
    firstToDo.markAsDone();
    expect(firstToDo.done).toEqual(true);
  });
});