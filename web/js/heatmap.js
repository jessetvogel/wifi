var measurements = [];
var measurementsHash = '';
var heatmap;
var pixel;
var context;

$(document).ready(function () {

  var canvas = document.getElementById('heatmap');
  canvas.width = $('#map').width();
  canvas.height = $('#map').height();
  context = canvas.getContext('2d');

  $(window).resize(updateHeatMap);
  updateHeatMap();

});

function updateHeatMap() {
    var offset = {
      x: $('#map img').position().left,
      y: $('#map img').position().top
    };

    var size = {
      width: $('#map img').width(),
      height: $('#map img').height()
    }

    // Clear canvas
    context.clearRect(0, 0, $('canvas').width(), $('canvas').height());

    // If no measurements, stop
    if(measurements.length == 0) return;

    var dx = 20;
    var dy = 20;
    for(var a = offset.x;a <= offset.x + size.width;a += dx) {
      for(var b = offset.y;b <= offset.y + size.height;b += dy) {
        var x = (a - offset.x) / size.width;
        var y = (b - offset.y) / size.height;
        var minDistance = 2.0;
        var closestPoint = null;
        var diagonal = Math.sqrt(size.width * size.width + size.height * size.height);
        for(var i = 0;i < measurements.length;i ++) {
          var distance = Math.sqrt(size.width * size.width * (x - measurements[i].x) * (x - measurements[i].x) + size.height * size.height * (y - measurements[i].y) * (y - measurements[i].y)) / diagonal;
          if(distance < minDistance) {
            closestPoint = measurements[i];
            minDistance = distance;
          }
        }

        context.fillStyle = toColor(closestPoint.value / 100.0, minDistance);
        context.fillRect(a - dx/2, b - dy/2, dx, dy);

      }
    }
}

function toColor(value, distance) {
  return 'hsla(' + (value * 120.0) + ', 100%, 50%, ' + Math.max(0.0, 1.0 - 3.0 * distance) + ')';
}
