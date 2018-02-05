
const http = require('https');

const url = 'https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findBookById/{id}';


const callback = (response) => {
  response.setEncoding('utf8');
  response.on('data', (data) => {
    console.log(data);
  });
};

http.get(url, callback);
