function updateDatalist() {
  $('#data .data-list').html('');
  for(var i = 0;i < measurements.length;i ++) {
    var dataItem = $('<div>').addClass('data-item');
    dataItem.append($('<div>').addClass('data-item-label')
      .append($('<span>').addClass('data-item-arrow glyphicon glyphicon-chevron-right'))
      .append('Data point #' + measurements[i].id)
      .append($('<span>').addClass('data-item-remove glyphicon glyphicon-remove'))
    );
    dataItem.append($('<div>').addClass('data-item-content')
      .append($('<div>').addClass('id').text(measurements[i].id))
      .append($('<div>').addClass('position-x').text(measurements[i].x))
      .append($('<div>').addClass('position-y').text(measurements[i].y))
    );
    $('#data .data-list').append(dataItem);
  }

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
    $.ajax('/remove?id=' + id).done(function (data) {

    });
  });
}
