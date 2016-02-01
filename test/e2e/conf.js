exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['toDoListFeature.js', 'filterFeature.js'],
  multiCapabilities: [
    {browserName: 'chrome'},{browserName: 'firefox'}
  ]
};
