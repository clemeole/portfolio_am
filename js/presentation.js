$(document).ready(function() {


  $("#presentation")
    .mouseenter(function() {
      console.log("j'entre");
      disappearNav();
    })
    .mouseleave(function() {
      console.log("je sors");
      appearNav();
    });

});


function disappearNav() {
  $("nav").animate({
    margin: "-13rem"
  }, 200, function() {
    $("header").animate({
      opacity: "0"
    }, 500);
  });


}

function appearNav() {
  $("nav").animate({
    margin: "2%"
  }, 200, function() {
    $("header").animate({
      opacity: "1"
    }, 500);
  });
}
