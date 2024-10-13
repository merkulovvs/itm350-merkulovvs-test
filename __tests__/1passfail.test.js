const add = require('../src/1passfail');

test('add two numbers', () => {
  expect(add(1, 2)).toBe(3);
});