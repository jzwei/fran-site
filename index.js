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

// $(document.body).off("click", ".sp-lightbox");
