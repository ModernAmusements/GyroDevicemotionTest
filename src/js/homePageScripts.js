// Preloader
$(function () {
  $("#preload-homepage").click(function () {
    $(this).fadeOut("300").remove();
  });
  if (!sessionStorage.getItem("homePagePreloader")) {
    sessionStorage.setItem("homePagePreloader", true);
    $("#preload-homepage").css("display", "block");
    setTimeout(function () {
      $("#preload-homepage").fadeOut();
    }, 2000);
    setTimeout(function () {
      $("#preload-homepage").remove();
    }, 2500);
  } else {
    $("#preload-homepage").css("display", "none");
  }
});

$(function () {
  var card = $(".card");
  card.on("mousemove", function (e) {
    // get mouse pos
    var x = e.clientX - $(this).offset().left + $(window).scrollLeft();
    var y = e.clientY - $(this).offset().top + $(window).scrollTop();
    // update vals
    var rY = map(x, 0, $(this).width(), -17, 17);
    var rX = map(y, 0, $(this).height(), -17, 17);
    // apply
    $(this)
      .children(".image")
      .css(
        "transform",
        "rotateY(" + rY + "deg)" + " " + "rotateX(" + -rX + "deg)"
      );
  });
   // return vals
  function map(x, in_min, in_max, out_min, out_max) {
    return ((x - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  }
});



let is_running = false;
  $(document).on('click touchstart', function(event) {
    if (
      DeviceMotionEvent &&
      typeof DeviceMotionEvent.requestPermission === 'function'
    ) {
      DeviceMotionEvent.requestPermission();
    }
    if (is_running) {
      console.log('Request permission for iOS 13+ devices');
    } else {
      window.ondevicemotion = function(event) {

        card.on("ondevicemotion", function (event) {
          // get mouse pos
          var x = event.accelerationIncludingGravity.x - $(this).offset().left + $(window).scrollLeft();
          var y = event.accelerationIncludingGravity.y - $(this).offset().top + $(window).scrollTop();

          xFixed = (Math.round(x * 10) / 10).toFixed();
          yFixed = (Math.round(y * 10) / 10).toFixed();

          // update vals
          var rY = map(x, 0, $(this).width(), -17, 17);
          var rX = map(y, 0, $(this).height(), -17, 17);
          // apply
          $(this)
            .children(".image")
            .css(
              "transform",
              "rotateY(" + rY + "deg)" + " " + "rotateX(" + -rX + "deg)"
            );
              // return vals
          function map(x, in_min, in_max, out_min, out_max) {
            return ((x - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
          }
        });







        // $('.mainheading')
        //   .removeClass('mainheading--desktop')
        //   .addClass('mainheading--mobile');

        // xAcc = event.accelerationIncludingGravity.x;
        // yAcc = event.accelerationIncludingGravity.y;

        // xAccFixed = (Math.round(xAcc * 10) / 10).toFixed();
        // yAccFixed = (Math.round(yAcc * 10) / 10).toFixed();

        // xWidthAcc = 500 + xAccFixed * 20;
        // yWeightAcc = 100 + yAccFixed * 4;

        // if (xWidthAcc % 20 == 0) {
        //   $('.mainheading--mobile').css(
        //     'font-variation-settings',
        //     " 'wght' " + yWeightAcc + ", 'wdth' " + xWidthAcc + '',
        //   );
        // }
      };
    }
  });











// let is_running = false;
// $(document).on('click touchstart', function () {
// 	if (
// 		DeviceMotionEvent &&
// 		typeof DeviceMotionEvent.requestPermission === "function"
// 	) {
// 		DeviceMotionEvent.requestPermission();
// 	}
// 	if (is_running) {
// 		console.log('running1')
// 	} else {
// 		console.log('running2')
// 		is_running = true;
// 	}
// });

