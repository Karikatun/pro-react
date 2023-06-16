/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  clearMocks: true,
  testEnvironment: 'jsdom',
  coveragePathIgnorePatterns: [
    '/node_modules/'
  ],
  moduleDirectories: [
    'node_modules'
  ],
  moduleFileExtensions: [
    'js',
    'jsx',
    'ts',
    'tsx',
    'json',
    'node'
  ],
  rootDir: '../../',
  testMatch: [
    '**/*.test.ts',
    '**/*.test.tsx'
  ],
  transform: { '^.+\\.ts?$': 'ts-jest' }
};
