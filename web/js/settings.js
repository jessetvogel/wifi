$(document).ready(function () {

  $('.settings-item-label').click(function () {
    if($(this).find('.settings-item-arrow').hasClass('glyphicon-chevron-right')) {
      // Animation
      $('.settings-item-arrow').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-right');
      $('.settings-item-content').slideUp();
      $(this).next().slideDown();
      $(this).find('.settings-item-arrow').removeClass('glyphicon-chevron-right').addClass('glyphicon-chevron-down');
    }

  });

});
