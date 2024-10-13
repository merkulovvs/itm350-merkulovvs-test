const multiply = require('../src/3datadriven');

test.each([[1, 2, 2], [3, 4, 12], [10, 123, 1230]])(
    'multiply a,b c is the answer', (a, b, expected) => {
      expect(multiply(a, b)).toBe(expected);
    }
  );