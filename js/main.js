$(document).ready(function(){

  var styleImages = function() {
    setTimeout(function(){ $("#intro-image-one").css("display", "none"); }, 3000);
    setTimeout(function(){ $("#intro-image-two").removeClass("hidden"); }, 3000);
    setTimeout(function(){ $("#intro-image-two").css("display", "none"); }, 4350);
    setTimeout(function(){ $("#intro-images").css("display", "none"); }, 4400);
  }

  styleImages();

  var documentEl = $(document),
      parallaxBg = $('div.parallax-bg');

  documentEl.on('scroll', function() {
      var currScrollPos = documentEl.scrollTop();
      parallaxBg.css('background-position', '0 ' + -currScrollPos/4 + 'px');
  });

  // var imageAnimation = function() {
  //   $("#intro-image-one").animate({
  //     left: '250px',
  //     height: '-=100%',
  //     width: '-=100%',
  //     opacity: 0,
  //   }, 10);
  // }

  // imageAnimation();
});
