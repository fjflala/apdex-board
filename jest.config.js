module.exports = {
  verbose: true,
  collectCoverageFrom: [
    "**/*.{js,jsx}",
    "!**/node_modules/**",
    "!**/coverage/**",
    "!**/dist/**",
    "!**/jest.config.js**",
    "!**/webpack.config.js**",
    "!**/src/index.js**",
  ],
  coverageDirectory: './coverage',
};