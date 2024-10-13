const getArrLength = require('../src/2collection');

test('returns length of array', () => {
    const arr = [1, 2, 3];
    expect(getArrLength(arr)).toBe(3);
  });