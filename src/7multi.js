function asyncTask() {
    return new Promise((resolve) => setTimeout(() => resolve('done'), 100));
  }

module.exports = asyncTask