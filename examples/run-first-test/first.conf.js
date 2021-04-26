exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || 'chgtest1',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'KaS1zRAksPsa8RtenETP',

  updateJob: false,
  specs: [
    './examples/run-first-test/specs/first_test.js'
  ],
  exclude: [],

  capabilities: [{
    project: "First Webdriverio iOS Project",
    build: 'Webdriverio iOS',
    name: 'single_test',
    device: 'iPhone 11 Pro',
    os_version: "13",
    app: process.env.BROWSERSTACK_APP_ID || 'bs://c3d22fb880345b396951940e8ac0586da2fb458e',
    'browserstack.debug': true
  }],

  logLevel: 'info',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: '',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,

  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 40000
  }
};
