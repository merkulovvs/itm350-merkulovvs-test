const timerClock = require('../src/4performance');

test('completes within 150ms', async () => {
    const startTime = Date.now();
    await timerClock();
    const endTime = Date.now();
    expect(endTime - startTime).toBeLessThan(150);
  });