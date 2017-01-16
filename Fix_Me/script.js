$(document).ready(function () {
  var position_x = 175;
  var position_y = 275;
  $(document).keypress(function(e) {
    if (e.which == 105) { // q
      position_x = position_x + 1;
    }
    if (e.which == 106) { // m
      if (position_x > 0) {
        position_x = position_x - 1;
      }
    }
    $("#player").css("top", position_x + "px")
  });
});
