// For every .js file in the src directory, require at least 80% line coverage.
module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    './src/**/*.js',    
    './backend/**/*.js', 
  ],
  coverageThreshold: {
    './src/*.js': {
      lines: 80,
    },
    './backend/*.js': { 
      lines: 80,
    },
  },
};