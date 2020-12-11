$(document).ready(function(){
    //#cnt1 스와이퍼
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
        },

        //접근성
        a11y: {
            prevSlideMessage: '이전 슬라이드 보기',
            nextSlideMessage: '다음 슬라이드 보기',
            firstSlideMessage: '첫번째 슬라이드',
            lastSlideMessage: '마지막 슬라이드',
        },
      })

      //#cnt1 일시정지버튼 클릭
      $('#cnt1 .btn_controller .autostop').on('click', function() {
          $(this).hide().siblings().show();
          swiperCnt1.autoplay.stop();
          return false;
      });

      //#cnt1 자동실행 클릭
      $('#cnt1 .btn_controller .autoplay').on('click', function(){
          $(this).hide().siblings().show();
          swiperCnt1.autoplay.start();
          return false;
      });

    //#cnt2 스와이퍼
    var swiperCnt2 = new Swiper('#cnt2 .swiper-container', {
        direction: 'horizontal',

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        
        //접근성
        a11y: {
            prevSlideMessage: '이전 슬라이드 보기',
            nextSlideMessage: '다음 슬라이드 보기',
            firstSlideMessage: '첫번째 슬라이드',
            lastSlideMessage: '마지막 슬라이드',
        },
    })

    //#cnt3 슬라이더 전체 수정
    //$('#cnt3 .img-slider1') 내부 슬라이더 상세 내용에는 아이디와 클래스명을 추가하면 안된다(필요한 경우 사용자 지정속성으로)
    $('#cnt3 .img-slider1').slick({
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1200,
        cssEase: 'cubic-bezier(.84, 0, .08, .99)',
        asNavFor: '.img-slider2',
        dots: true,
        focusOnSelect: true,
        prevArrow: $('#cnt3 #prev'),
        nextArrow: $('#cnt3 #next'),
    });
    $('#cnt3 .img-slider2').slick({
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1400,
        cssEase: 'cubic-bezier(.84, 0, .08, .99)',
        asNavFor: '.img-slider1',
        prevArrow: $('#cnt3 #prev'),
        nextArrow: $('#cnt3 #next'),
    });    

    //#cnt3 일시정지/재생 버튼 제어
    $('#cnt3 .controller .autostop').on('click', function(){
        $(this).hide().siblings().show();
        $('#cnt3 .img-slider1, #cnt3 .img-slider2').stop().slick('slickPause');
    });

    $('#cnt3 .controller .autoplay').on('click', function(){
        $(this).hide().siblings().show();
        $('#cnt3 .img-slider1, #cnt3 .img-slider2').stop().slick('slickPlay');
    });

    //#cnt3 slick 슬라이더 pagination에 텍스트 추가하기
    var navTxt = ['굿이어 웰트 제법', '하이드로 제법', '시스 제법', '모카신 제법', '캘리포니아 제법', '볼로냐 제법', '프리웨이 제법'];
    $('#cnt3 .slick-dots li button').each(function (idx) {
        $(this).text(navTxt[idx]);
    });
});