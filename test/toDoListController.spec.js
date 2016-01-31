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
      expect(ctrl.tasks[0]).toEqual({name:"Scrub the deck", complete:false});
    });
  });

  describe('when a task has been created', function(){
    beforeEach(function(){
      ctrl.newTask = "Scrub the deck";
      ctrl.createTask();
      ctrl.newTask = "Walk the plank";
      ctrl.createTask();
      task1 = ctrl.tasks[0];
      task2 = ctrl.tasks[1];
    });

    describe('editing a task', function(){
      it('updates the task name in the tasks array', function(){
        task1.newName = "Splice the mainbrace"
        ctrl.editTask(task1);
        expect(task1.name).toEqual("Splice the mainbrace");
      });
    });

    describe('deleting a task', function(){
      it('removes the task from the tasks array', function(){
        ctrl.deleteTask(task1);
        expect(ctrl.tasks[0]).toBe(undefined);
      });
    });

    describe('completing a task', function(){
      it('marks the task as complete', function(){
        ctrl.completeTask(task1);
        expect(task1.complete).toEqual(true);
      });
    });

    describe('filtering tasks', function(){
      beforeEach =function(){
        ctrl.completeTask(task1);
      };

      it('filters all tasks', function(){
        ctrl.filterAll();
        expect(task1.show && task2.show).toEqual(true);
      });

      it('filters complete tasks', function(){
        ctrl.filterComplete();
        expect(task2.show).toEqual(false);
      });

      it('filters incomplete tasks', function(){
        ctrl.filterIncomplete();
        expect(task2.show).toEqual(true);
      });
    });
  });



});
