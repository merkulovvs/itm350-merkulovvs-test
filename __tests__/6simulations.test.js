const dataSim = require('../src/6simulation');

test('', (done) => {
    function callback(data) {
      expect(data).toBe('data');
      done();
    }
  
    dataSim(callback);
  });