
const Hapi = require('hapi');
const Gateway = require('hapi-gateway');

const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: Number(3000),
});

server.register([
  {
    register: Gateway,
    // These are options that are applied to all lambda handlers
    options: {
      role: 'arn:aws:iam::XXXX:role/lambda_basic_execution',
      config: {
        accessKeyId: 'YOUR_ACCESS_KEY',
        secretAccessKey: 'YOUR_SECRET_KEY',
        region: 'us-east-1',
      },
    },
  },
], (err) => {
  if (err) {
    throw err;
  }

  server.route([
    {
      // This is a normal hapi route.
      method: 'GET',
      path: 'https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allBooks',
      handler(request, reply) {
        reply('a typical hapi route');
      },
    },
    {
      // This calls a lambda function that is already deployed as "foo".
      // If you haven't deployed this already, the route will return a 500.
      method: 'GET',
      path: '/foo-lambda',
      config: {
        handler: {
          lambda: {
            name: 'foo',
          },
        },
      },
    },
  ]);

  server.start((err) => {
    if (err) {
      throw err;
    }

    console.log(`Server started at ${server.info.uri}`);
  });
});
