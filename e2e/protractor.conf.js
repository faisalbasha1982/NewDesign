<<<<<<< HEAD
=======
// @ts-check
>>>>>>> e43aa8c834a0feddf5f63f061d35a187eb64773d
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

<<<<<<< HEAD
=======
/**
 * @type { import("protractor").Config }
 */
>>>>>>> e43aa8c834a0feddf5f63f061d35a187eb64773d
exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './src/**/*.e2e-spec.ts'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
<<<<<<< HEAD
      project: require('path').join(__dirname, './tsconfig.e2e.json')
=======
      project: require('path').join(__dirname, './tsconfig.json')
>>>>>>> e43aa8c834a0feddf5f63f061d35a187eb64773d
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};