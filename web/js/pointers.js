var pointer = {
  x: -100,
  y: 0
};

var pointerHistory = {
  x: -100,
  y: 0
};

$(document).ready(function () {

  $('#map').click(function (event) {
      pointer.x = (event.clientX - $('#map img').offset().left) / $('#map img').width();
      pointer.y = (event.clientY - $('#map img').offset().top) / $('#map img').height();
      updatePointers();
      $('#scan').removeClass('disabled');
  });

  $(window).resize(function () {
    updatePointers();
  });

});

function updatePointers() {
  $('#pointer').css({
    left: ($('#map img').position().left + $('#map img').width() * pointer.x - $('#pointer').width() / 2) + 'px',
    top: ($('#map img').position().top + $('#map img').height() * pointer.y - $('#pointer').height() / 2) + 'px'
  });
  $('#pointer-history').css({
    left: ($('#map img').position().left + $('#map img').width() * pointerHistory.x - $('#pointer-history').width() / 2) + 'px',
    top: ($('#map img').position().top + $('#map img').height() * pointerHistory.y - $('#pointer-history').height() / 2) + 'px'
  });
}
