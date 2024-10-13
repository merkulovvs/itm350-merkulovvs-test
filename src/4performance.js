function timerClock() {
    return new Promise(resolve => setTimeout(() => resolve('done'), 100));
  }

  module.exports = timerClock;