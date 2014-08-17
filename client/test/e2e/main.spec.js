describe('E2E: main page', function() {
  var ptor;

  beforeEach(function() {
    ptor = protractor.getInstance();
  });

  it('should load the home page', function() {
    browser.get('/');
    var ele = by.id('home-header');
    expect(ptor.isElementPresent(ele)).toBe(true);
  });
});
