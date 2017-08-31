const settings = require('./settings');
const server = require('./server');
const fileServer = require('./file_server');
const dataServer = require('./data_server');

server.start(function (request, response) {
  // Try to see who can handle the request
  if(fileServer.handle(request, response))
    return;

  if(dataServer.handle(request, response))
    return;

  // If request not recognised, respond with 404
  response.writeHead(404, {'Content-Type': 'text/plain'});
  response.write(settings.error.NOT_FOUND);
  response.end();

});
