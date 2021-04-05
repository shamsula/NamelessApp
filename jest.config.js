module.exports = {
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "\\.css$": require.resolve("./test/style-mock.js"),
  },
//   coverageThreshold: {
//     global: {
//       statements: 30,
//       branches: 25,
//       functions: 25,
//       lines: 20,
//     },
//   },
  collectCoverageFrom: ["**/src/**/*.js", "**/src/**/*.tsx", "**/src/**/*.ts"],
  moduleDirectories: ["node_modules"],
  transform: {
    "\\.tsx?$": "ts-jest",
    "\\.jsx?$": "babel-jest", // if you have jsx tests too
  },
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/tsconfig.json",
    },
  },
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\](?!lodash-es/).+\\.js$"],
};
