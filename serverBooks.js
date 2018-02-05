const inert = require('inert');
// const path = require('path');
const Hapi = require('hapi');

const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: Number(3000),
});

server.register(inert, (err) => {
  if (err) { throw err; }
});

// add route
server.route({
  path: '/',
  method: 'GET',
  handler: {
    file: './allBooks.txt',
  },
});

// to make the server listen to the assigned port
if (!module.parent) {
  server.start((err) => {
    if (err) { throw err; }
    console.log('Server running at:', server.info.uri);
  });
}
module.exports = server;

