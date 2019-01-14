module.exports = {
  verbose: true,
  collectCoverageFrom: [
    "**/*.{js,jsx}",
    "!**/node_modules/**",
    "!**/coverage/**",
    "!**/dist/**",
  ],
  coverageDirectory: './coverage',
};