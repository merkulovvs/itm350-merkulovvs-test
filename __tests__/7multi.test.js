const asyncTask = require('../src/7multi');
test('completes async', async () => {
    const result = await asyncTask();
    expect(result).toBe('done');
  });