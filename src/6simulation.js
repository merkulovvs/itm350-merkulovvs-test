function dataSim(callback) {
    setTimeout(() => callback('data'), 100);
  }

module.exports = dataSim