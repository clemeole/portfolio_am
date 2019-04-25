var fil_videos_images = $(".v");
var vCurrent = $("#vCurrent");

$(document).ready(function(){

fil_videos_images.children("img").on("click", function(){
  //alert($(this).siblings().attr("src"));
  setVideoSelected($(this));
  setSrcVideoSelected($(this).siblings().attr("src"));
});

});


function setVideoSelected(img){
  fil_videos_images.children("img").attr("id", "");
  img.attr("id", "videoSelected");
}

function setSrcVideoSelected(srcIframe){
  $(".vCurrent").attr("src", srcIframe);
}
