describe('Filtering to do list', function(){

  var taskEntry = element(by.model('taskCtrl.newTask'));
  var taskEdit = element(by.model('task.newName'));
  var tasks = element.all(by.repeater('task in taskCtrl.tasks'));
  var task1 = tasks.get(0);
  var task2 = tasks.get(1);

  beforeEach(function(){
    browser.get('http://localhost:8080');
  });

  describe('when several tasks have been added', function(){
    beforeEach(function(){
      taskEntry.sendKeys('Scrub the deck');
      element(by.className('task-create')).click();
      element(by.className('complete-box')).click();
      taskEntry.sendKeys('Set sail!');
      element(by.className('task-create')).click();
    });

    it('allows a user to filter by all', function(){
      element(by.className('filter-all')).click();
      expect(task1.isDisplayed()).ToBeTruthy;
    });

    it('allows a user to filter by incomplete', function(){
      element(by.className('filter-incomplete')).click();
      expect(task1.isDisplayed()).ToBeFalsy;
      expect(task2.isDisplayed()).ToBeTruthy;
    });

    it('allows a user to filter by complete', function(){
      element(by.className('filter-complete')).click();
        expect(task1.isDisplayed()).ToBeTruthy;
        expect(task2.isDisplayed()).ToBeFalsy;
    });

    it('notes how many tasks are currently displayed', function(){
      expect(element(by.id('count')).getText()).toContain('2');
    });

    it('allows a user to delete all filtered tasks', function(){
      element(by.className('filter-complete')).click();
      element(by.className('delete-all')).click();
      element(by.className('filter-all')).click();
      expect(task1.isDisplayed()).ToBeFalsy;
    });

  });
});
