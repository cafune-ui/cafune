module.exports = {
  // 指定需要进行单元测试的文件匹配规则
  testMatch: ['<rootDir>/components/**/**.test.js'],
  setupFiles: ['<rootDir>/__test__/setup.js'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'scss', 'css'],
  // 需要忽略的文件匹配规则
  testPathIgnorePatterns: ['/node_modules/'],
  testURL: 'http://localhost/',
  // 是否收集测试覆盖率，以及覆盖率文件路径
  collectCoverage: true,
  coverageDirectory: './coverage',
  collectCoverageFrom: ['src/**/*.{tsx, jsx}', '!**/node_modules/**'],
  moduleNameMapper: {
    '^util/(.*)$': '<rootDir>/util/$1',
    '^src(.*)$': '<rootDir>/src$1',
    '\\.(css|scss|less)$': 'identity-obj-proxy'
  },
  transform: {
    // 将.js后缀的文件使用babel-jest处理
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': 'babel-jest'
  }
};
