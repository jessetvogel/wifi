var measurements = [{x:0, y:0, value:25}, {x:1, y:0, value:50}, {x:0, y:1, value:75}, {x:1, y:1, value:100},{x:0.5,y:0.5,value:50}];
var heatmap;

$(document).ready(function () {

  heatmap = h337.create({
    // only container is required, the rest will be defaults
    container: document.querySelector('#map'),

    maxOpacity: 0.5,
    minOpacity: 0.0,

    radius: 128
  });

  $(window).resize(updateHeatMap);

  updateHeatMap();
});

function updateHeatMap() {
    // Generate scaled data from points
    var points = [];

    var offset = {
      x: $('#map img').position().left,
      y: $('#map img').position().top
    };

    var size = {
      width: $('#map img').width(),
      height: $('#map img').height()
    }

    for(var i = 0;i < measurements.length;i ++) {
      points.push({
        x: Math.round(offset.x + measurements[i].x * size.width),
        y: Math.round(offset.y + measurements[i].y * size.height),
        value: measurements[i].value
      });
    }

    heatmap.setData({
      max: 100,
      data: points
    });
}
