describe('ToDoListController', function(){
  beforeEach(module('ToDoList'));

  var ctrl

  beforeEach(inject(function($controller){
    ctrl = $controller("ToDoListController");
  }));

  it('initialises with an empty add item function', function(){
    expect(ctrl.addItem).toBeUndefined();
  });


});
