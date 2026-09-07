/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  moduleNameMapper: {
    // 1. Tambahkan pemetaan Path Alias @/ ke folder src/
    '^@/(.*)$': '<rootDir>/src/$1',

    // 2. Mocking Asset & CSS
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/__mocks__/fileMock.js',
  },
  transform: {
    '^.+\\.(ts|tsx)$': [
      'ts-jest',
      {
        tsconfig: {
          jsx: 'react-jsx',
          moduleResolution: 'node',
          allowImportingTsExtensions: false,
          esModuleInterop: true,
        },
      },
    ],
  },
};