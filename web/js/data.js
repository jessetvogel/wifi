$(document).ready(function () {

  $('.data-item-label').click(function () {
    if($(this).find('.data-item-arrow').hasClass('glyphicon-chevron-right')) {
      // Animation
      $('.data-item-arrow').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-right');
      $('.data-item-content').slideUp();
      $(this).next().slideDown();
      $(this).find('.data-item-arrow').removeClass('glyphicon-chevron-right').addClass('glyphicon-chevron-down');
    }

    // Pointer
    pointerHistory.x = parseFloat($(this).next().find('.position-x').text());
    pointerHistory.y = parseFloat($(this).next().find('.position-y').text());
    updatePointers();

  });

  $('.data-item-remove').click(function () {
    var id = parseInt($(this).parent().parent().find('.id').text());
    alert('Remove id ' + id);
    $(this).parent().parent().remove();
  });

});
