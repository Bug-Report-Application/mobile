/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  clearMocks: true,
  moduleFileExtensions: ['js', 'mjs', 'cjs', 'jsx', 'ts', 'tsx', 'json', 'node'],
  preset: 'react-native',
  testPathIgnorePatterns: ['/node_modules/'],
  transform: {
    '\\.(js|jsx)': 'babel-jest',
  },
};
