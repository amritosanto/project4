$(function(){ 
    $('#banner').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        cssEase: 'linear',
        autoplay: true
      });
    $(window).scroll(function() {    
    var nav_scroll = $(this).scrollTop();
    if (nav_scroll > 1) { 
        $("nav").addClass("nav");
    }
    else{
        $("nav").removeClass("nav");
    }
    });
    var swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        pagination: {
          el: '.swiper-pagination',
        },
      });
      $(window).scroll(function(){

        var scrolling = $(this).scrollTop();

        if(scrolling > 50){
            $(".bottom-to-top").fadeIn(500);
        }
        else{
            $(".bottom-to-top").fadeOut(500); 
        }
      });
      $(".bottom-to-top").click(function(){
        $('html, body').animate({
            scrollTop:0
        }, 2000);
     });
     $(window).on("load", function(){
      $("#loading").delay(2000) .fadeOut(2000);
  });
});