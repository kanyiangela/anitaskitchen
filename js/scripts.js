$(document).ready(function() {
  $(".button2").click(function(event) {
    var emailInput = $("input#email").val()
    event.preventDefault();
    alert(emailInput + "you've successfully subscribed")
    $(".button2").html("subscribed!")
  });
});
$(document).ready(function() {
  $("#open-menu").click(function() {
    $("aside").animate({
      "left": 0
    }, 1000);
  });
});
$(document).ready(function() {
  $("#close-menu").click(function() {
    $("aside").animate({
      "left": "-100\%"
    }, 1000);
  });
});