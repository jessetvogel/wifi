$(document).ready(function () {

  $('#scan').click(function () {
    // Only allow if not disabled
    if($(this).hasClass('disabled'))
      return;

    scan(pointer.x, pointer.y);

  });

});

function scan(x, y) {
  $.ajax('/scan?x=' + x + '&y=' + y) .done(function (data) {
    console.log('Scanned!');
  });
}

function getData() {
  $.ajax('/data').done(function (data) {
    measurements = data.measurements;

    var hash = JSON.stringify(measurements);
    if(hash != measurementsHash) {
      updateHeatMap();
      updateDatalist();
      console.log('New hash: ' + hash);
      measurementsHash = hash;
    }
  });
}

setInterval(getData, 500);
