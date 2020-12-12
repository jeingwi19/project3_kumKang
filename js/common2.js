$(document).ready(function(){
    //depth1 .hide()
    $('#menuWrap').hide();

    //pc 전체메뉴 버튼 클릭하면 전체depth2 나타나기
    $('.header .util .menu .btn_open').on('click', function(){
        if(!$(this).hasClass('active')) {
            $(this).addClass('active').parents('.header').addClass('on').find('.util').next().stop().slideDown('fast', function(){
                $(this).prev().find('.scr_text').text('전체메뉴 닫기');
            });

            //메뉴에서 포커스가 나가지 않도록 제어??..
            var _first = $('#menuWrap').find('[data-link="first"]');
            var _last = $('#menuWrap').find('[data-link="last"]');

            $('#menuWrap').css({display: 'block', width: '100%', height: '680px'}).stop().animate({top: 100}, -300, function(){
                _first.focus();
            });

            _first.on('keydown', function(e){
                console.log(e.keyCode);
                if ( e.shiftKey && e.keyCode == 9) {
                    e.preventDefault();
                    _last.focus();
                }
            });
            
            _last.on('keydown', function(e){
                if( !e.shiftKey && e.keyCode == 9) {
                    e.preventDefault();
                    $('.btn_open').focus();
                }
            });

        } else if ($(this).hasClass('active')) {
            $(this).removeClass('active').parents('.util').next().stop().slideUp('fast', function(){
                $(this).prev().find('.scr_text').text('전체메뉴 열기');
            });

        }
        /* else if(!$('.header .util .menu .btn_open').hasClass('active')) {
            //풀페이지 첫번째 body태그 활성화 클래스명 .fp-viewing-0
            $('.fp-viewing-0 #wrap .header').removeClass('on');
        } */
    });

    //인디케이터 첫번째 클릭, .header에서 .on제거...??
    $('#wrap + #fp-nav ul > li > a').on('click', function(){
        $(this).parents('#fp-nav').prev().find('.header').removeClass('on');
    });

    //pc상단 nav누르면 depth2메뉴 등장 & 스타일 변환..??
    $('#pcGnb ul li a').on('click', function(){
        //alert();
        
        $('.btn_open').addClass('active').parents('.header').addClass('on').find('#menuWrap').stop().slideDown('fast');
        return false;
    });
});