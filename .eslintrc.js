// http://eslint.org/docs/user-guide/configuring

// module.exports = {
//   root: true,
//   parser: 'babel-eslint',
//   parserOptions: {
//     sourceType: 'module'
//   },
//   env: {
//     browser: true,
//   },
//   // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
//   extends: 'standard',
//   // required to lint *.vue files
//   plugins: [
//     'html'
//   ],
//   // add your custom rules here
//   'rules': {
//     // allow paren-less arrow functions
//     'arrow-parens': 0,
//     // allow async-await
//     'generator-star-spacing': 0,
//     // allow debugger during development
//     'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
//   }
// }


var commonRules = require('eslint-rules');

const OFF = 0, WARN = 1, ERROR = 2;

const globals = Object.assign({}, commonRules.globals, {
  smartLog: true,
  AmCharts: true,
  daum: true
});

const rules = Object.assign({}, commonRules.rules, {

});

module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:vue/recommended" // or 'plugin:vue/base'
  ],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
  },
  env: {
    browser: true,
    node: true,
    jquery: true,
    commonjs: true,
    es6: true
  },
  globals,
  rules: {
    // override/add rules' settings here
    'vue/no-invalid-v-if': 'error'
  }
};