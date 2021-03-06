const accessHTTPAsync = require('./api2');

describe('Tests for checking the logging of data received from HTTP Get request', () => {
  test('Verify data returned for successful HTTP request', (done) => {
    const callback = (data) => {
      expect(data).toMatch('DATA');
      done();
    };
    accessHTTPAsync('https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allBooks', callback);
  });
  test('Verify data returned for failed HTTP request', (done) => {
    const callback = (data) => {
      expect(data).toMatch('ERROR');
      done();
    };
    accessHTTPAsync('http://httpstat.us/404', callback);
  });
  test('Verify data returned for HTTP request end', (done) => {
    const callback = (error, data) => {
      expect(data).toMatch('END');
      done();
    };
    accessHTTPAsync('https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allBooks', callback);
  });
});
