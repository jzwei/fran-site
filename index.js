$(".item").sparkle({
  direction: "down"
});

$(".topimage").sparkle({
  direction: "down",
  minSize: 30,
  // maxSize: 20,
  color: "rainbow",
  count: 100
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
  maxSize: 20,
  color: "rainbow",
  count: 50
});

// $(document.body).off("click", ".sp-lightbox");
