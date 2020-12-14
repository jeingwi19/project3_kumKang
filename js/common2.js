$(document).ready(function(){
    //depth1 .hide()
    $('#menuWrap').hide();

    //pc 전체메뉴 버튼 클릭하면 전체depth2 나타나기
    $('#pcHeader .util .menu .btn_open').on('click', function(){
        //메뉴에서 포커스가 나가지 않도록 제어??..
        var _first = $('#menuWrap').find('[data-link="first"]');
        var _last = $('#menuWrap').find('[data-link="last"]');

        if(!$(this).hasClass('active')) { //닫겨진 경우
            //on과 active 동시에 추가
            $(this).addClass('active').parents('#pcHeader').addClass('on').find('#menuWrap').stop().slideDown('fast', function(){
                $(this).prev().prev().find('.scr_text').text('전체메뉴 닫기');
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

        } else if ($(this).hasClass('active')) { //열려진 경우
            $(this).removeClass('active').parents('.util').next().next().stop().slideUp('fast', function(){
                $(this).prev().prev().find('.scr_text').text('전체메뉴 열기');
                if (!$('#pcHeader').hasClass('active')) $('#pcHeader').removeClass('on');
            });
        }
        /* else if(!$('.header .util .menu .btn_open').hasClass('active')) {
            //풀페이지 첫번째 body태그 활성화 클래스명 .fp-viewing-0
            $('.fp-viewing-0 #wrap .header').removeClass('on');
        } */
    });

    //인디케이터 첫번째 클릭, .header에서 .on제거...?? => 이건 뭔가요?? 필요없는것 같은데...
    // $('#wrap + #fp-nav ul > li > a').on('click', function(){
    //     $(this).parents('#fp-nav').prev().find('.header').removeClass('on');
    // });

    //pc상단 nav누르면 depth2메뉴 등장 & 스타일 변환..??
    $('#pcGnb ul li a').on('click', function(){
        $('#pcHeader .btn_open').addClass('active').parents('#pcHeader').addClass('on').find('#menuWrap').stop().slideDown('fast', function () {
            $(this).prev().prev().find('.scr_text').text('전체메뉴 닫기');
            $('#menuWrap [data-link="first"]').focus();
        });
        return false;
    });
});