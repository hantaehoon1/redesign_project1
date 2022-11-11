jQuery(document).ready(function(){
  $('.menu>li').mouseover(function(){
    $(this).find('.submenu').stop().slideDown(500);
  })
})

function Imgslide1_init(){
  const swiper = new Swiper(".imgslide .swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });

  swiper.on("slideChange", function () {
    console.log(swiper.activeIndex);
    
    $(".imgslide").removeClass("first-slide-actived");

    if(swiper.activeIndex == 1 || swiper.activeIndex ==4) {
      $(".imgslide").addClass("first-slide-actived");
    }
  
  });

}

Imgslide1_init();