toDoList.controller('ToDoListController', ['filterFilter', function(filterFilter){

  var self = this;
  self.tasks = [];
  var newTask;
  var taskToEdit;
  var newName;

  self.createTask = function(){
    self.tasks.push({name:self.newTask, complete: false});
  };

  self.editTask = function(taskToEdit){
    for(var i = 0; i < self.tasks.length; i++) {
       if (self.tasks[i].name === taskToEdit.name) {
         self.tasks[i].name = self.newName;
       }
     }
  };

  self.deleteTask = function(taskToDelete){
    for(var i = 0; i < self.tasks.length; i++) {
       if (self.tasks[i].name === taskToDelete.name) {
         self.tasks.splice(i);
       }
     }
  };

}]);
