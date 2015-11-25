$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  if (wScroll>750) {
    console.log(wScroll);
  }

  $('.parallax-bg').css({
    'transform' : 'translate(0px, -'+ wScroll /40 +'%)'
  });

  // $('.').css({
  //   'transform' : 'translate(0px, -'+ wScroll /40 +'%)'
  // });

});



