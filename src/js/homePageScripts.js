// Preloader
$(function() {
  $('#preload-homepage').click(function() {
    $(this)
      .fadeOut('300')
      .remove();
  });
  if (!sessionStorage.getItem('homePagePreloader')) {
    sessionStorage.setItem('homePagePreloader', true);
    $('#preload-homepage').css('display', 'block');
    setTimeout(function() {
      $('#preload-homepage').fadeOut();
    }, 2000);
    setTimeout(function() {
      $('#preload-homepage').remove();
    }, 2500);
  } else {
    $('#preload-homepage').css('display', 'none');
  }
});

//Desktop

$(function() {
  var card = $('.card');
  card.on('mousemove', function(e) {
    // get mouse pos
    var x = e.clientX - $(this).offset().left + $(window).scrollLeft();
    var y = e.clientY - $(this).offset().top + $(window).scrollTop();
    // update vals
    var rY = map(x, 0, $(this).width(), -17, 17);
    var rX = map(y, 0, $(this).height(), -17, 17);
    // apply
    $(this)
      .children('.image')
      .css(
        'transform',
        'rotateY(' + rY + 'deg)' + ' ' + 'rotateX(' + -rX + 'deg)',
      );
  });
  // return vals
  function map(x, in_min, in_max, out_min, out_max) {
    return ((x - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  }
});

//Mobile
let is_running = false;
$(document).on('click touchstart', function handleMotion(event) {
  event.preventDefault();
  // Request permission for iOS 13+ devices
  if (
    DeviceMotionEvent &&
    typeof DeviceMotionEvent.requestPermission === 'function'
  ) {
    DeviceMotionEvent.requestPermission();
  }

  if (is_running) {
    window.removeEventListener('devicemotion', handleMotion);
    console.log('Request permission for iOS 13+ devices');
  } else {
    window.ondevicemotion = function handleMotion(event) {
      window.addEventListener('devicemotion', handleMotion);
      // get mouse pos
          var x =  Math.clip(parseInt((event.rotationRate.beta*10).toFixed(0)));
          var y = Math.clip(parseInt((event.rotationRate.alpha*10).toFixed(0)));

          xFixed = (Math.round(x * 20) / 10).toFixed();
          yFixed = (Math.round(y * 20) / 10).toFixed();

          xGyro = xFixed * 5;
          yGyro = yFixed * 5;

          var rX = xGyro;
          var rY = yGyro - 90;

          $('.card')
            .children('.image')
            .css(
              'transform',
              'rotateY(' + rX + 'deg)' + ' ' + 'rotateX(' + rY + 'deg)',
            );
    };
  }
});

