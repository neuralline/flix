module.exports = {
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/test'],
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  }
}
