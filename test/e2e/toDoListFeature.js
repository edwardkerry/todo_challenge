describe('To Do List', function(){

  var taskEntry = element(by.model('taskCtrl.newTask'));
  var taskEdit = element(by.model('taskCtrl.newName'));

  beforeEach(function(){
    browser.get('http://localhost:8080');
  });

  it('has a title', function(){
    expect(browser.getTitle()).toEqual('ToDo');
  });

  it('allows a user to add a task', function(){
    taskEntry.sendKeys('Scrub the deck');
    element(by.className('task-create')).click();
    tasks = element.all(by.repeater('task in taskCtrl.tasks'));
    expect(tasks.get(0).getText()).toContain('Scrub the deck');
  });

  describe('when a task has been added', function(){
    beforeEach(function(){
      taskEntry.sendKeys('Scrub the deck');
      element(by.className('task-create')).click();
      tasks = element.all(by.repeater('task in taskCtrl.tasks'));
    });

    it('hides task options by default', function(){
      expect($('.task-options').isDisplayed()).toBe(false);
    });

    it('allows a user to view task options', function(){
      element(by.className('show-edit-button')).click();
      expect($('.task-options').isDisplayed()).toBe(true);
    });

    it('allows a user to hide task options', function(){
      element(by.className('task-name')).click();
      element(by.className('hide-edit-button')).click();
      expect($('.task-options').isDisplayed()).toBe(false);
    });

    it('allows a user to edit a task', function(){
      element(by.className('task-name')).click();
      taskEdit.sendKeys('Splice the mainbrace');
      element(by.className('update-button')).click();
      expect(tasks.get(0).getText()).toContain('Splice the mainbrace');
    });

    it('notes how many tasks are currently displayed', function(){
      expect(element(by.id('count')).getText()).toContain('1');
    });
  });

});
