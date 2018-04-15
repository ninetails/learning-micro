module.exports = {
  roots: ['src'],
  collectCoverageFrom: [
    'src/**/*.js'
  ],
  transform: {
    '^.+\\.js$': 'babel-jest'
  },
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0
    }
  }
}
