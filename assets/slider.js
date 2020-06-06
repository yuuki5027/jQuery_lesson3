$(function() {
  $("#thumnail-list li").click(function() {
   var imageSrc = $(this).find("a").attr("href");
   $("#main-image").attr("src",imageSrc);
   $("#thumnail-list li").removeClass("selected");
   $(this).addClass("selected");
   return false;
  });
}); 