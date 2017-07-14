$(document).ready(function () {

  $('#scan').click(function () {
    // Only allow if not disabled
    if($(this).hasClass('disabled'))
      return;

    scan(pointer.x, pointer.y);

  });

});


function scan(x, y) {
  alert('scan(' + x + ', ' + y + ')');
}