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
    $('.cards_more').each(function(i) {
      $(this).on('click', function(e) {
        e.preventDefault();
        $('.cards_wrap_top').eq(i).toggleClass('cards_active_top');
        $('.cards_wrap_back').eq(i).toggleClass('cards_active_back');

      });
    });
    $('.cards_back').each(function(i) {
      $(this).on('click', function(e) {
        e.preventDefault();
        $('.cards_wrap_top').eq(i).toggleClass('cards_active_top');
        $('.cards_wrap_back').eq(i).toggleClass('cards_active_back');
      });
    });

// Section CATALOG, scrips for TAB
    //fitness tab
    $('.catalog_list_fitness').click(function() {
      if($('.catalog_list_fitness').hasClass('active_tab')) {}
      else {
        $('.catalog_list_fitness').toggleClass('active_tab');
        $('.catalog_cards_wrap').toggleClass('active_section_catalog');

        if($('.catalog_list_run').hasClass('active_tab')) {
          $('.catalog_list_run').toggleClass('active_tab'); 
          $('.catalog_cards_run').toggleClass('active_section_catalog');
        }
        else {
          $('.catalog_list_triatlon').toggleClass('active_tab'); 
          $('.catalog_cards_triatlon').toggleClass('active_section_catalog');
        }
      }
    });
    //run tab
    $('.catalog_list_run').click(function() {
      if($('.catalog_list_run').hasClass('active_tab')) {}
      else {
        $('.catalog_list_run').toggleClass('active_tab');
        $('.catalog_cards_run').toggleClass('active_section_catalog');
        if($('.catalog_list_fitness').hasClass('active_tab')) {
          $('.catalog_list_fitness').toggleClass('active_tab'); 
          $('.catalog_cards_wrap').toggleClass('active_section_catalog');
        }
        else {
          $('.catalog_list_triatlon').toggleClass('active_tab'); 
          $('.catalog_cards_triatlon').toggleClass('active_section_catalog');
        }
      }
    });
    //triatlon tab
    $('.catalog_list_triatlon').click(function() {
      if($('.catalog_list_triatlon').hasClass('active_tab')) {}
      else {
        $('.catalog_list_triatlon').toggleClass('active_tab');
        $('.catalog_cards_triatlon').toggleClass('active_section_catalog');
        if($('.catalog_list_run').hasClass('active_tab')) {
          $('.catalog_list_run').toggleClass('active_tab'); 
          $('.catalog_cards_run').toggleClass('active_section_catalog');

        }
        else {
          $('.catalog_list_fitness').toggleClass('active_tab'); 
          $('.catalog_cards_wrap').toggleClass('active_section_catalog');
        }
      }
    });

    // MODULE windows for order/consultation/callback/
    $('[data-modal=consult]').on('click', function() {
      $('.overlay, .overlay_consult').fadeIn();
    });
    $('.overlay_close_win').on('click', function() {
      $('.overlay').fadeOut();
    });

    $('[data-modal=order]').on('click', function() {
      $('.overlay, .overlay_order').fadeIn();
    });
    $('.overlay_close_win').on('click', function() {
      $('.overlay').fadeOut();
    });

    //input mask phone
    $("#phone").mask("+7(999) 999-99-99");
    $("#phone_form").mask("+7(999) 999-99-99");
    $("#phone_buy").mask("+7(999) 999-99-99");

    // Smooth scroll up && down
    $(window).scroll(function(){
      if ($(this).scrollTop() > 1600) {
        $('.screen_up').fadeIn();
      } else {
        $('.screen_up').fadeOut();
      }
    });

    $("a[href^='#main']").click(function(){
      var _href = $(this).attr("href");
      $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
      return false;
    });
});
