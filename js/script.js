var sections = document.querySelectorAll("section");
var sectionCourante = 0;
var tabLiens = document.querySelectorAll("li");
var tabLi = [];
var lastScrollTop = 0;
var inScrolling = false;
var autoplay = false;
var videoPresentationSource = $("iframe")[0].src;
var currentLink;

window.onload = function() {
  // window.scrollTo(0, 0);
  // setTimeout(function() {
  //   $("iframe")[0].src = videoPresentationSource;
  //   window.scrollTo(0, 0);
  // }, 10);



  $('#linkVideo').on('click', function(ev) {

    console.log("play video");

    playVideo();


  });



  document.addEventListener("scroll", function(e) {

    console.log("scrolling");
    var st = window.pageYOffset || document.documentElement.scrollTop;

    if (st > lastScrollTop) {

      // downscroll code
      //scrollToDown();
      console.log("down");

    } else {
      // upscroll code
      //scrollToUp();
      console.log("up");
    }
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling



  }, false);

  for (var i = 0; i < tabLiens.length; i++) {
    tabLi.push(tabLiens[i]);
  }

  tabLi.forEach(function(lien) {
    lien.addEventListener("click", function() {
      if (currentLink == "linkVideo") {
        $("#presentationVideo")[0].src = videoPresentationSource;

        //$("#videoSelected>iframe")[0].src = $(".v").eq(0).children("iframe")[0].src;
        //console.log("pas id linkVideo");
      } else if (currentLink == "linkVideos") {
        restartSectionVideos();
      }
      console.log(tabLi.indexOf(lien)); //indexOf ne marche pas sur les NodeList (=htlm element)
      window.scrollTo(0, window.innerHeight * tabLi.indexOf(lien));
      sectionCourante = tabLi.indexOf(lien);
      currentLink = $(this).attr("id");
    });
  });


  window.addEventListener("keydown", function(e) {
    if (e.key == "ArrowDown") {
      e.preventDefault();
      console.log("touche down");
      scrollToDown();
    } else if (e.key == "ArrowUp") {
      e.preventDefault();
      console.log("touche up");
      scrollToUp();
    } else {
      console.log(e.which + "rien");
    }

  }, false);

}


function scrollToUp() {

  if (sectionCourante == 0) {} else {
    sectionCourante -= 1;
    inScrolling = false;
  }

  if (sections[sectionCourante].attributes[0].value == "presentation") {
    playVideo();
  } else {
    $("iframe")[0].src = videoPresentationSource;
  }

  window.scrollTo(0, window.innerHeight * sectionCourante);
}


function scrollToDown() {

  if (sectionCourante == sections.length - 1) {} else {
    sectionCourante += 1;
  }

  if (sections[sectionCourante].attributes[0].value == "presentation") {
    playVideo();
  } else {
    $("iframe")[0].src = videoPresentationSource;
  }
  window.scrollTo(0, window.innerHeight * sectionCourante);
}

function playVideo() {
  if ($("iframe")[0].src == videoPresentationSource + "&autoplay=1") {
    console.log("on ne recommence pas !");
  } else {
    $("iframe")[0].src = videoPresentationSource;
    setTimeout(function() {
      $("iframe")[0].src += "&autoplay=1";
    }, 500);
  }
}
