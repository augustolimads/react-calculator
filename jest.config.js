module.exports = {
  // Browser jsdom test
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/**/stories.tsx',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!src/types/**/*.d.ts',
    '!src/styles/**/*.ts',
    '!src/pages/**/*.tsx'
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/']
}
