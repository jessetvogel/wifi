const settings = require('./settings');

var measurements = [];
var idCounter = 1;

var getParameters = function(req){
  let q=req.url.split('?'),result={};
  if(q.length>=2){
      q[1].split('&').forEach((item)=>{
           try {
             result[item.split('=')[0]]=item.split('=')[1];
           } catch (e) {
             result[item.split('=')[0]]='';
           }
      })
  }
  return result;
}


module.exports = {

  handle: function (request, response) {
    // Handle stuff
    if(request.url == '/reset') {
      measurements = [];
      idCounter = 0;
      response.writeHead(200, {'Content-Type': 'application/json'}); response.write('{}'); response.end();
      return true;
    }

    if(/^\/scan\?/.test(request.url)) {
      var params = getParameters(request);
      if(typeof params.x == 'undefined' || typeof params.y == 'undefined') return false;
      measurements.push({ id: idCounter++, x: parseFloat(params.x), y: parseFloat(params.y), value: Math.random() * 100.0 });
      response.writeHead(200, {'Content-Type': 'application/json'}); response.write('{}'); response.end();
      return true;
    }

    if(/^\/remove\?/.test(request.url)) {
      var params = getParameters(request);
      if(typeof params.id == 'undefined') return false;
      for(var i = 0;i < measurements.length;i ++) {
        if(measurements[i].id == params.id)
          measurements.splice(i, 1);
      }
      response.writeHead(200, {'Content-Type': 'application/json'}); response.write('{}'); response.end();
      return true;
    }

    if(request.url == '/data') {
      response.writeHead(200, {'Content-Type': 'application/json'});
      response.write(JSON.stringify({ 'measurements': measurements }));
      response.end();
      return true;
    }

    return false;
  }

};
