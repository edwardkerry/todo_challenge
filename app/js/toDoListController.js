toDoList.controller('ToDoListController', ['filterFilter', function(filterFilter){

  var self = this;
  self.tasks = [];
  var newTask;
  var taskToEdit;
  var newName;

  self.createTask = function(){
    self.tasks.push({id:self.tasks.length, name:self.newTask, complete: false});
  };

  self.editTask = function(taskToEdit, newName){
    task = self.tasks[taskToEdit.id];
    task.name = newName;
  };

}]);
