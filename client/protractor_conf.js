exports.config = {
  capabilities: { 'browserName': 'chrome' },
  baseUrl: 'http://127.0.0.1:9001/',
  specs: ['test/e2e/**/*.spec.js'],
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }
};
