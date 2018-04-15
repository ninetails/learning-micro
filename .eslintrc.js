module.exports = {
  extends: ['eslint:recommended', 'standard'],
  parser: 'babel-eslint',
  env: {
    es6: true,
    jest: true,
    node: true
  },
  rules: {
    'no-console': 1
  }
}
