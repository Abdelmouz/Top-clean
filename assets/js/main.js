var scroll = new SmoothScroll('a[href*="#"]');

$(window).scroll(function () {
  let x = $(window).scrollTop();
  console.log(x);
  if (x >= 575) {
    $("#div2").css("background", "black");
    console.log("vfdbgfd");
  }

  $(function () {
    $("html").niceScroll();
  });
});
wow = new WOW({
  boxClass: "wow", // default
  animateClass: "animated", // default
  offset: 0, // default
  mobile: true, // default
  live: true, // default
}).init();

$("document").ready(function () {
  $("#toglle").click(function () {
    $(".navphone").toggleClass("show");
  });
  $(".btn1").click(function () {
    $(".p_hide").toggleClass("p_show");
     $(".pp").toggleClass("hh");
  });
});
