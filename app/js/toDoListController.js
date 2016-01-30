toDoList.controller('ToDoListController', function(){

  var self = this;
  self.tasks = [];
  var newTask;
  var taskToEdit;

  self.createTask = function(){
    self.tasks.push({id:self.tasks.length, name:self.newTask, complete: false});
  };

  self.editTask = function(){
    // edit = this.filter('getByProperty')('id',task.id, this.tasks);
    // edit.name = taskToEdit;
  };

});
