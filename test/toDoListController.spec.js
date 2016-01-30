describe('ToDoListController', function(){
  beforeEach(module('ToDoList'));

  var ctrl

  beforeEach(inject(function($controller){
    ctrl = $controller("ToDoListController");
  }));

  describe('by default controller', function(){

    it('initialises with undefined new task', function(){
      expect(ctrl.newTask).toBeUndefined();
    });

    it('initialises with empty tasks array', function(){
      expect(ctrl.tasks).toEqual([]);
    });
  });

  describe('creating a task', function(){

    it('pushes new task into the tasks array', function(){
      ctrl.newTask = "Scrub the deck";
      ctrl.createTask();
      expect(ctrl.tasks[0]).toEqual({id:0, name:"Scrub the deck", complete:false});
    });
  });

  describe ('when a task has been created', function(){
    beforeEach(function(){
      ctrl.newTask = "Scrub the deck";
      ctrl.createTask();
      task1 = ctrl.tasks[0]
    });

    describe('editing a task', function(){
      it('updates the task in the tasks array', function(){
        updated = {id: 0, name: "Splice the mainbrace", complete: false}
        ctrl.editTask(task1, 'Splice the mainbrace');
        expect(ctrl.tasks[0]).toEqual(updated);
      });
    });
  });



});
