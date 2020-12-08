$(document).ready(function(){
    var swiperCnt1 = new Swiper('#cnt1 .swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        autoplay: {
            delay: 2000,
            disableOninteraction: false,
        },
      })

      //#cnt1 일시정지버튼 클릭
      $('#cnt1 .btn_controller .autostop').on('click', function() {
          $(this).hide().siblings().show();
          swiperCnt1.autoplay.stop();
          return false;
      });

      //#cnt1 자동실행 ㅋ르릭
      $('#cnt1 .btn_controller .autoplay').on('click', function(){
          $(this).hide().siblings().show();
          swiperCnt1.autoplay.start();
          return false;
      });

});