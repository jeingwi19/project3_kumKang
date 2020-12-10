$(document).ready(function(){
    //.header 스크롤 내리면 on추가
    var scrollT;
    var timer = 0;
    var _header = $('.header');

    //$('.header').addClass('load');

    /* $(window).on('scroll', function(){
        clearTimeout(timer);

        timer = setTimeout(function (){
            scrollT = $(this).scrollTop();

            if(scrollT > $('#cnt1').outerHeight() - $('.header').outerHeight()) $('.header').addClass('on');
            else $('.header').removeClass('on');

            $('.header').each(function(){
                if(scrollT > $(this).offset().top - 500) $(this).addClass('on');
            });
        }, 50);
    });
    $(window).trigger('scroll'); */

    

    //depth1 .hide()
    $('#menuWrap').hide();

    //#pcHeader에 마우스 진입 .on
    /* $('#pcHeader').on({
        mouseenter: function() {
            $(this).addClass('on');
        },
        mouseleave: function() {
            if(!$(this).find('#menuWrap').is('.active')){
                $(this).removeClass('on');
            }
        }
    }); */

    //#pcGnb > ul > li 또는 전체메뉴버튼 클릭하면 depth1 slideDown
    $('#pcGnb > ul > li').on('click', function(){
        //$(this).parents('.header').addClass('on')
        if($(this).parents('.header').hasClass('on')){
            $('#menuWrap').show();
        }
        return false;
    });
});