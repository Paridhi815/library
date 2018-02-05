
const Models = require('../models');

module.exports = [
  {
    method: 'GET',
    path: '/users',
    handler: (request, response) => {
      Models.users.findAll().then((result) => {
        console.log(result);
        response({
          result,
          statusCode: 200,
        });
      });
    },
  },
  {
    method: 'POST',
    path: '/user',
    handler: (request, response) => {
      console.log(request);
      Models.users.create({
        firstName: request.payload.firstName,
        lastName: request.payload.lastName,
      }).then((result) => {
        response({
          statusCode: 201,
          message: 'User created',
        });
      });
    },
  },
];
