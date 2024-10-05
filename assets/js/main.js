// ==================================================
// * Project Name   :  Synox – Finance & Consulting Site Template.
// * File           :  JS Base
// * Version        :  1.0.0
// * Author         :  XpressBuddy (https://themeforest.net/user/xpressbuddy/portfolio)
// * Developer      :  webrok (https://www.fiverr.com/webrok?up_rollout=true)
// ==================================================

(function($) {
  "use strict";

  // Back To Top - Start
  // --------------------------------------------------
  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $('.backtotop:hidden').stop(true, true).fadeIn();
    } else {
      $('.backtotop').stop(true, true).fadeOut();
    }
  });
  $(".scroll").on('click', function() {
    $("html, body").animate({scrollTop: 0}, 0);
    return false; 
  });
  // Back To Top - End
  // --------------------------------------------------

  // preloader - start
  // --------------------------------------------------
  /*$(window).on('load', function(){
    $('#preloader').fadeOut('slow',function(){
      $(this).remove();
    });
  });*/
  // preloader - end
  // --------------------------------------------------

  // Mobile Menu Button Class Chnage - Start
  // --------------------------------------------------
  $(".mobile_menu_btn").on('click', function(){
    $(".mobile_menu_btn > i").toggleClass("far fa-bars fa-solid fa-xmark");
  });
  // Mobile Menu Button Class Chnage - End
  // --------------------------------------------------

  // Sticky Header - Start
  // --------------------------------------------------
  if ($('.stricky').length) {
    $('.stricky').addClass('original').clone(true).insertAfter('.stricky').addClass('stricked-menu').removeClass('original');
  }
  $(window).on('scroll', function () {
    if ($('.stricked-menu').length) {
      var headerScrollPos = 150;
      var stricky = $('.stricked-menu');
      if ($(window).scrollTop() > headerScrollPos) {
        stricky.addClass('stricky-fixed');
      } else if ($(this).scrollTop() <= headerScrollPos) {
        stricky.removeClass('stricky-fixed');
      }
    }
  });
  // Sticky Header - End
  // --------------------------------------------------

  // Header Menu Item Effect - Start
  // --------------------------------------------------
  $('.site_header .main_menu_list > li:not(.active)').mouseover(function () {
    $('.site_header .main_menu_list > li:not(.active)').css({
      'opacity': '0.5',
      'transition': 'opacity 0.3s'
    });
    $(this).css({
      'opacity': '1',
      'transition': 'opacity 0.3s'
    });
  });

  $('.site_header .main_menu_list > li:not(.active)').mouseout(function () {
    $('.site_header .main_menu_list > li:not(.active)').css({
      'opacity': '1',
      'transition': 'opacity 0.3s'
    });
  });
  // Header Menu Item Effect - End
  // --------------------------------------------------

  // Offcanvas - Start
  // --------------------------------------------------
  $(".offcanvas_btn").on('click', function() {
    $(".offcanvas_wrapper").addClass("active");
    $(".offcanvas_overlay").addClass("active");
  });
  $(".offcanvas_close_btn").on('click', function() {
    $(".offcanvas_wrapper").removeClass("active");
    $(".offcanvas_overlay").removeClass("active");
  });
  $(".offcanvas_overlay").on('click', function() {
    $(".offcanvas_wrapper").removeClass("active");
    $(this).removeClass("active");
  });
  // Offcanvas - End
  // --------------------------------------------------

  // Odometer Counter - Start
  // --------------------------------------------------
  jQuery('.odometer').appear(function (e) {
    var odo = jQuery(".odometer");
    odo.each(function () {
      var countNumber = jQuery(this).attr("data-count");
      jQuery(this).html(countNumber);
    });
  });
  // Odometer Counter - End
  // --------------------------------------------------

  // Pricing Toggle Button - Start
  // --------------------------------------------------
  $(".pricing_toggle_btn").on('click', function(){
    $(this).toggleClass("active");
    $(".pricing_block").toggleClass("active");
  });
  // Pricing Toggle Button - End
  // --------------------------------------------------

  // Videos & Images popup - Start
  // --------------------------------------------------
  $('.video_btn').magnificPopup({
    type: 'iframe',
    preloader: false,
    removalDelay: 160,
    mainClass: 'mfp-fade',
    fixedContentPos: false
  });

  $('.zoom-gallery').magnificPopup({
    delegate: '.popup_image',
    type: 'image',
    closeOnContentClick: false,
    closeBtnInside: false,
    mainClass: 'mfp-with-zoom mfp-img-mobile',
    gallery: {
      enabled: true
    },
    zoom: {
      enabled: true,
      duration: 300,
      opener: function(element) {
        return element.find('img');
      }
    }
  });
  // Videos & Images popup - End
  // --------------------------------------------------

  // Wow JS - Start
  // --------------------------------------------------
  var wow = new WOW({
    animateClass: 'animated',
    offset: 100,
    mobile: true,
    duration: 1000,
  });
  wow.init();
  // Wow JS - End
  // --------------------------------------------------
  
  // Background Parallax - Start
  // --------------------------------------------------
  $('.parallaxie').parallaxie({
    speed: 0.5,
    offset: 0,
  });
  // Background Parallax - End
  // --------------------------------------------------
  
  // Filter Elements - Start
  // --------------------------------------------------
  $(".filter_elements_nav > ul > li").click(function(){
    var filterValue = $(this).attr('data-filter');
    if(filterValue == "all") {
      $(".filter_elements_wrapper > div").show();
    } else {
      $(".filter_elements_wrapper > div").not('.' + filterValue).hide();
      $(".filter_elements_wrapper > div").filter('.' + filterValue).show();
    }
  });
  $(".filter_elements_nav > ul > li").on("click", function() {
    $(this).addClass("active").siblings().removeClass("active");
  });
  // Filter Elements - End
  // --------------------------------------------------

  // Clients Logo Carousel - Start
  // --------------------------------------------------
  const clientsLogoCarousel = new Swiper('.clients_logo_carousel', {
    loop: true,
    speed: 5000,
    freeMode: true,
    spaceBetween: 24,
    centeredSlides: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
      1025: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 6,
      },
    },
  });
  // Clients Logo Carousel - End
  // --------------------------------------------------

  // Review Carousel - Start
  // --------------------------------------------------
  const reviewCarousel = new Swiper('.review_carousel', {
    loop: true,
    speed: 1000,
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
    },
    pagination: {
      el: ".review_pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  });

  const reviewCarouselTwo = new Swiper('.review_carousel_2', {
    loop: true,
    speed: 1000,
    spaceBetween: 30,
    slidesPerView: 1,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
    },
    navigation: {
      nextEl: ".rc2-swiper-button-next",
      prevEl: ".rc2-swiper-button-prev",
    },
  });

  const reviewMarqueeVerticalUp = new Swiper(".review_marquee_vertical_up", {
    loop: true,
    speed: 16000,
    freeMode: true,
    slidesPerView: 2,
    direction: "vertical",
    autoplay: {
      delay: 0,
      reverseDirection: true,
      disableOnInteraction: true,
    },
  });

  const reviewMarqueeVerticalBottom = new Swiper(".review_marquee_vertical_bottom", {
    loop: true,
    speed: 16000,
    freeMode: true,
    slidesPerView: 2,
    direction: "vertical",
    autoplay: {
      delay: 0,
      disableOnInteraction: true,
    },
  });
  // Review Carousel - End
  // --------------------------------------------------


})(jQuery);