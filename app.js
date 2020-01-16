$("#showOnMobile").hide();
$("#mainContent").hide();

$("#mainContent").fadeIn(1000);

$(".navBars").click(function showNav() {
  $("#showOnMobile").slideToggle();
});
