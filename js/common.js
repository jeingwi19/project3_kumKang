$(document).ready(function(){
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
            $('#menuWrap').stop().slideDown('fast');
        }
        return false;
    });

    //pc 전체메뉴 버튼 클릭하면 전체depth2 나타나기
    $('.header .util .menu .btn_open').on('click', function(){
        $(this).addClass('active').parents('.util').next().stop().slideDown().parents('.header').addClass('on');
        /* if($(this).hasClass('active')){
            if($(window).width() > 1440) {
                $(this).addClass('active').parents('.util').next().stop().slideDown('fast', function(){
                    $(this).prev().find('.btn_line_inner').text('전체메뉴 닫기');
                });
                if(!$('.header').hasClass('active')) $('.header').addClass('on');
            } else{
                //$('#menuWrap').stop().slideDown('fast');
            }
        } else {
            if($(window).width() > 1440) {
                $(this).removeClass('active').parents('.util').next().stop().slideUp('fast', function(){
                    $(this).prev().find('.btn_line_inner').text('전체메뉴 열기');
                });
            }
        } */
    });

    //header에 마우스 진입시 스타일 변경
    $('#pcGnb').on({
        mouseenter: function() {
            $(this).parents('.header').addClass('on');
        },
        mouseleave: function() {
            $('.fp-viewing-0 .header').removeClass('on');
        }
    });

    //클릭해서 열린 depth2메뉴에서 마우스가 떠나면 depth2 사라지기
    $('#menuWrap').on('mouseleave', function() {
        //$(this).stop().sildeUp('fast');
        $(this).hide();
    });
});