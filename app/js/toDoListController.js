toDoList.controller('ToDoListController', [function(){

  var self = this;
  self.tasks = [];
  var newTask;
  var taskToEdit;

  self.createTask = function(){
      self.tasks.push({name: self.newTask, complete: false, show: true});
  };

  self.editTask = function(taskToEdit){
    for(var i = 0; i < self.tasks.length; i++) {
       if (self.tasks[i].name === taskToEdit.name) {
         self.tasks[i].name = taskToEdit.newName;
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

  self.completeTask = function(taskToComplete){
    taskToComplete.complete = !taskToComplete.complete;
  };

  self.filterAll = function(){
    for(var i = 0; i < self.tasks.length; i++) {
      self.tasks[i].show = true;}
  };

  self.filterComplete = function(){
    for(var i = 0; i < self.tasks.length; i++) {
      if(self.tasks[i].complete === true)
        {self.tasks[i].show = true;
      }else {self.tasks[i].show = false;}
    }
  };

  self.filterIncomplete = function(){
    for(var i = 0; i < self.tasks.length; i++) {
      if(self.tasks[i].complete === false)
        {self.tasks[i].show = true;
      }else {self.tasks[i].show = false;}
    }
  };

  self.onShow = function(){
    var count = 0;
    for(var i = 0; i < self.tasks.length; i++) {
      if(self.tasks[i].show === true){
        count ++;
      }
    }
    return count;
  };

}]);
