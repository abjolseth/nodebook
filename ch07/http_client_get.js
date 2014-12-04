/**
 * Created by abj on 04.12.14.
 */
var http = require('http');
var options = {
  hostname: 'localhost',
  port: '8080'
};

function handleResponse(response) {
  var serverData = '';
  response.on('data', function(chunck){
    serverData += chunck;
  });
  response.on('end', function(){
    console.log('Response Status:', response.statusCode);
    console.log('Response Headers:', response.headers);
    console.log(serverData);
  });
};

http.request(options, function(response){
  handleResponse(response);
}).end();