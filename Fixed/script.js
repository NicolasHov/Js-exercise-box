$(document).ready(function () {
  var position_x = 175;
  var position_y = 275;
  $(document).keypress(function(e) {
    if (e.which == 105) { // i
      if (position_x > 0) {
        position_x = position_x - 5;
      }
    }
    if (e.which == 106) { // j
      if (position_y > 0) {
        position_y = position_y - 5;
      }
    }
    if (e.which == 107) { // k
      if (position_x < 350) {
        position_x = position_x + 5;
      }
    }
    if (e.which == 108) { // l
      if (position_y < 550) {
        position_y = position_y + 5;
      }
    }
    $("#player").css("top", position_x + "px")
    $("#player").css("left", position_y + "px")
  });
});
