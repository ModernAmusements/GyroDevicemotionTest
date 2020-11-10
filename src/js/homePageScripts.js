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
    var x = e.clientX - $(this).offset().left + $(window).scrollLeft();
    var y = e.clientY - $(this).offset().top + $(window).scrollTop();
    var rY = map(x, 0, $(this).width(), -17, 17);
    var rX = map(y, 0, $(this).height(), -17, 17);
    $(this)
      .children(".image")
      .css(
        "transform",
        "rotateY(" + rY + "deg)" + " " + "rotateX(" + -rX + "deg)"
      );
  });
  function map(x, in_min, in_max, out_min, out_max) {
    return ((x - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  }
});

let is_running = false;
$(document).on('click touchstart', function () {
	// Request permission for iOS 13+ devices
	if (
		DeviceMotionEvent &&
		typeof DeviceMotionEvent.requestPermission === "function"
	) {
		DeviceMotionEvent.requestPermission();
	}
	if (is_running) {
		console.log('running1')
	} else {
		console.log('running2')
		is_running = true;
	}
});
