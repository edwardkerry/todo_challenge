describe('Filtering to do list', function(){

  var taskEntry = element(by.model('taskCtrl.newTask'));
  var taskEdit = element(by.model('task.newName'));
  var tasks = element.all(by.repeater('task in taskCtrl.tasks'));

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
      expect(element(by.css('body')).getText()).toContain('Scrub the deck');
      expect(element(by.css('body')).getText()).toContain('Set sail!');
    });

    it('allows a user to filter by incomplete', function(){
      element(by.className('filter-incomplete')).click();
      expect(element(by.css('body')).getText()).toContain('Set sail!');
      expect(element(by.css('body')).getText()).not.toContain('Scrub the deck');
    });

    it('allows a user to filter by complete', function(){
      element(by.className('filter-complete')).click();
      expect(element(by.css('body')).getText()).toContain('Scrub the deck');
      expect(element(by.css('body')).getText()).not.toContain('Set sail!');
    });

    it('notes how many tasks are currently displayed', function(){
      expect(element(by.id('count')).getText()).toContain('2');
    });

    it('allows a user to delete all filtered tasks', function(){
      element(by.className('filter-complete')).click();
      element(by.className('delete-all')).click();
      element(by.className('filter-all')).click();
      expect(element(by.css('body')).getText()).not.toContain('Scrub the deck');
      expect(element(by.css('body')).getText()).toContain('Set sail!');
    });

  });
});
