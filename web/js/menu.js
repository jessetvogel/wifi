$(document).ready(function () {

  $('#button-settings').click(function () {
    $('.panel-item').slideUp();
    $('#settings').slideDown();
    $('#menu .button').removeClass('pressed');
    $(this).addClass('pressed');
  });

  $('#button-data').click(function () {
    $('.panel-item').slideUp();
    $('#data').slideDown();
    $('#menu .button').removeClass('pressed');
    $(this).addClass('pressed');
  });

  $('#button-heatmap').click(function () {
    if($(this).hasClass('pressed'))
      $(this).removeClass('pressed');
    else
      $(this).addClass('pressed');
  })

});
