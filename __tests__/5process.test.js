const processes = require('../src/5process');

test('follow the process', () => {
    expect(processes()).toBe(6);
  });