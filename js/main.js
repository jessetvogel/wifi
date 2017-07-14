const server = require('./server');

server.start(function (request, response) {

  if(api.handle(request, response))
    return;
    
  // If failed to handle, send bad request
  response.writeHead(404, {'Content-Type': 'text/plain'});
  response.write(settings.error.BAD_REQUEST);
  response.end();

});
