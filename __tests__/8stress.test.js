const sum = require('../src/8stress');

test('handle large arrays', () => {
    const largeArray = Array(1000000).fill(1);
    expect(sum(largeArray)).toBe(1000000);
  });