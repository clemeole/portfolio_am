var imageCourante;
var tabImg = $("#sousContainerPhotos>div");
var bfore = $("<div id='bfore'><div id='croix'>X</div></div>");
$(document).ready(function() {




  tabImg.click(function() {
    console.log($(this).children().attr("src"));
    openPhotos($(this));
    imageCourante = $(this).index();
  });

  $("#left").on("click", function() {
    leftPhotos();
  });

  $("#right").on("click", function() {
    rightPhotos();
  });

  $("#croix").on("click", function() {
    closePhotos();
  });


  $(document).keydown(function(e) {
    console.log("gre");
    if (e.which == 27) {
      closePhotos();
      // e.preventDefault();
    }
  });


});

function openPhotos(div) {


  $("#bfore").animate({
    opacity: "1"
  }, 200);

  $("#bfore").css("display", "grid");
  $("#currentImg").append("<p> " + div.children("p").text() + "</p>");
  $("#currentImg").append($("<img src='" + div.children().attr("src") + "' />"));

}


function closePhotos() {
  $("#bfore").animate({
    opacity: "0"
  }, 200, function() { //après que l'animation soit terminée
    $("#bfore").css("display", "none");
    $("#currentImg").children("img").remove();
    $("#currentImg").children("p").remove();
  });

}

function leftPhotos() {

  $("#currentImg").children("img").remove();
  $("#currentImg").children("p").remove();



  if (imageCourante == 0) {
    imageCourante = 5;
    $("#currentImg").append("<p> " + tabImg[imageCourante].children[1].textContent + "</p>");
    $("#currentImg").append($("<img src='" + tabImg[imageCourante].children[0].attributes[0].value + "' />"));

  } else {
    imageCourante -= 1;
    $("#currentImg").append("<p> " + tabImg[imageCourante].children[1].textContent + "</p>");
    $("#currentImg").append($("<img src='" + tabImg[imageCourante].children[0].attributes[0].value + "' />"));
  }

}

function rightPhotos() {

  $("#currentImg").children("img").remove();
  $("#currentImg").children("p").remove();



  if (imageCourante == tabImg.length-1) {
    imageCourante = 0;
    $("#currentImg").append("<p> " + tabImg[imageCourante].children[1].textContent + "</p>");
    $("#currentImg").append($("<img src='" + tabImg[imageCourante].children[0].attributes[0].value + "' />"));
  } else {
    imageCourante += 1;
    $("#currentImg").append("<p> " + tabImg[imageCourante].children[1].textContent + "</p>");
    $("#currentImg").append($("<img src='" + tabImg[imageCourante].children[0].attributes[0].value + "' />"));
  }


}
