const server = require('./serverBooks');
const fs = require('fs');

const html = fs.readFileSync('./allBooks.txt', 'UTF8');

describe('Testing Hapi Using Inject:', () => {
  test('Check Response status for valid path:', (done) => {
    const options = {
      method: 'GET',
      url: '/',
    };
    server.inject(options, (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
  test('Check Response status for invalid path:', (done) => {
    const options = {
      method: 'GET',
      url: '/ewfrtbhy',
    };
    server.inject(options, (response) => {
      expect(response.statusCode).toBe(404);
      done();
    });
  });
});
