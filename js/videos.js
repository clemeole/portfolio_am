var fil_videos_images = $(".v");
var vCurrent = $("#vCurrent");
var bougebouge = $("#bougebouge");
var previousImageVideo = 0;
var topBougebouge = 0;


$(document).ready(function() {
  //pour aligner le span avec l'image de la vidéo (sur le left)
  //bougebouge.css("left", $("#videoSelected").offset().left - $("#fil_videos").offset().left - 2);

  fil_videos_images.on("click", function() {
    setVideoSelected($(this), true);
    bougebougeToCurrentV();
  });

});


function setVideoSelected(v, autoplay) {
  //attribut un id au container de l'image video en cours
  fil_videos_images.attr("id", "");
  v.attr("id", "videoSelected");
  setSrcVideoSelected(v.children("iframe").attr("src"), autoplay);
}

function setSrcVideoSelected(srcIframe, autoplay) {
  //met la source de l'iframe en display none sur l'iframe en display block
  setTimeout(function() {
    if(autoplay){
        $(".vCurrent").attr("src", srcIframe+="?autoplay=1");
    } else {
      $(".vCurrent").attr("src", srcIframe);
    }

  }, 500);

}

function bougebougeToCurrentV() {

  var indexImageVideo = $("#videoSelected").index(".v");
  topBougebouge = indexImageVideo * 16 + indexImageVideo * 5 + -0.5 + "%";

  bougebouge.animate({
    top: topBougebouge
  }, 500);
}


function restartSectionVideos(){
  setVideoSelected($(".v").eq(0), false);
  topBougebouge = 0;
  bougebougeToCurrentV();
}
