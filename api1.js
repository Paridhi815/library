
const http = require('https');

const url = 'https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allBooks';


const callback = (response) => {
  response.setEncoding('utf8');
  response.on('data', (data) => {
    console.log(data);
  });
};

http.get(url, callback);

// for testing
// const http = require('https');

// const url = 'https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allBooks';


// const callback = (response) => {
//   response.setEncoding('utf8');
//   response.on('data', (data) => {
//     console.log(data);
//     return data;
//   });
// };


// module.exports = http.get(url, callback);
