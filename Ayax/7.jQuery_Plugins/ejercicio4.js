$(document).ready(function () {

    $('#default').bbslider();

    $('#auto').bbslider({auto: true, timer: 3000, controls: true, loop: true, pauseOnHit: false});

    var callBefore = function () {
      var pCount = $('#callback').data('pCount');
      var pIndex = $('#callback').data('pIndex');
      var panel = pIndex + 1;
      $('#call-log').append('<p>Panel ' + panel + ' of ' + pCount + ' total panels has ended.</p>');
    };
    var callAfter = function () {
      var pCount = $('#callback').data('pCount');
      var pIndex = $('#callback').data('pIndex');
      var panel = pIndex + 1;
      $('#call-log').append('<p>Panel ' + panel + ' of ' + pCount + ' total panels has started.</p>');
    };

    $('#callback').bbslider({controls: true, callbackBefore: callBefore, callbackAfter: callAfter});
  })