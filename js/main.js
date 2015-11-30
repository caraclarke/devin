$(document).ready(function(){

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
