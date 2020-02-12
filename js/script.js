$(document).ready(function(){
    $('.slider_wrap').slick({
        autoplay: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/4_watch/left.png"> </button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/4_watch/right.png"></button>', 
        responsive: [
            {
              speed: 1200,
              breakpoint: 968,
              settings: {
                arrows: false
              }
            }
          ]

    });
});
