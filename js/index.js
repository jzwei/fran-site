$(".item").sparkle({
  direction: "down"
});

$(".topimage").sparkle({
  direction: "down",
  minSize: 20,
  // maxSize: 20,
  color: "white",
  count: 50
});

// cancel the default events
$(".topimage")
  .off("mouseover.sparkle")
  .off("mouseout.sparkle");
// starts it
$(".topimage").trigger("start.sparkle");

function stop_sparkle() {
  $(".topimage").trigger("stop.sparkle");
}

setTimeout(stop_sparkle, 3500);

$("figure img").sparkle({
  direction: "down",
  minSize: 10,
  maxSize: 15,
  color: "white",
  count: 25
});

// $("a").on("touchstart", function(event) {

// This is a hacky solution to the canvas-sparkles lib messing up touches of links on mobile.
// A better fix would be to actually fix the jquery-canvas-sparkles library
// OR better still, if we adjust what we're selecting with the plugin (in this file), that might fix it!
// $("a").on("touchend", function(event) {
//   if (event.currentTarget.href) {
//     window.location = event.currentTarget.href;
//   }
//   return true;
// });

// $(document.body).off("click", ".sp-lightbox");
