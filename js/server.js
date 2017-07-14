const http = require('http');
const port = 8080;

module.exports = {

  port: 8080,

  start: function (callback) {
    // Create http server object
    const server = http.createServer(callback);

    // Listen to port as defined in settings
    server.listen(this.port, function (error) {
      if(error)
        console.log('Server error:' + error);
    });
  },

  stop: function () {
    
  }

};
