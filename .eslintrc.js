// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: '2017',
    sourceType: 'module'
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: [
    "airbnb-base",
    "plugin:vue/recommended"
  ],
  // required to lint *.vue files
  plugins: [
    'vue',
    'html',
    'graphql'
  ],
  // add your custom rules here
  rules: {
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    'no-debugger': 0,
    'graphql/template-strings': [
      'error',
      {
        env: 'literal',
        projectName: 'app'
      }
    ]
  }
}
