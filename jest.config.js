module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  moduleNameMapper: {
    '^Network(.*)$': '<rootDir>/src/service/network$1',
    '^Index(.*)$': '<rootDir>/src/pages/index$1'
  }
};
