$(document).ready(function() {

  $("nav>ul>li").each(function() {
    $(this)
      .mouseenter(function() {
        $(this).children("span").stop().animate({
          width: "95%"
        }, 200);
      })
      .mouseleave(function(){
        $(this).children("span").stop().animate({
          width: "0%"
        }, 200);
      });

      $(this).mouseenter(function(){
        $(this).css("font-weight", "bold");
      })

      $(this).mouseleave(function(){
        $(this).css("font-weight", "normal");
      })
  });

});
