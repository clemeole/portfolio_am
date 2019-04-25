var fil_videos_images = $(".v");
var vCurrent = $("#vCurrent");
var bougebouge = $("#bougebouge");
var previousImageVideo = 0;
var topBougebouge = 0;


$(document).ready(function() {
  //pour aligner le span avec l'image de la vidéo (sur le left)
  //bougebouge.css("left", $("#videoSelected").offset().left - $("#fil_videos").offset().left - 2);

  fil_videos_images.on("click", function() {
    setVideoSelected($(this));
    setSrcVideoSelected($(this).children("iframe").attr("src"));
    bougebougeToCurrentV($(this));
  });

});


function setVideoSelected(v) {
  //attribut un id au container de l'image video en cours
  fil_videos_images.attr("id", "");
  v.attr("id", "videoSelected");
}

function setSrcVideoSelected(srcIframe) {
  //met la source de l'iframe en display none sur l'iframe en display block
  setTimeout(function() {
    $(".vCurrent").attr("src", srcIframe+="?autoplay=1");
  }, 500);

}

function bougebougeToCurrentV(currentImgVideo) {

  var indexImageVideo = $("#videoSelected").index(".v");
  topBougebouge = indexImageVideo * 16 + indexImageVideo * 5 + -0.5 + "%";

  bougebouge.animate({
    top: topBougebouge
  }, 500);
}
