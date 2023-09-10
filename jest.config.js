module.exports = {
  testEnvironment: "node", // Use a Node.js environment
  testMatch: ["**/__tests__/**/*.test.js"], // Your test file pattern
  setupFilesAfterEnv: ["./jest.setup.js"], // Optional setup file
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
};
