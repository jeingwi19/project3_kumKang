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

    //pc상단 nav누르면 depth2메뉴 등장 & 스타일 변환..??
    $('#pcGnb ul li a').on('click', function(){
        $('#pcHeader .btn_open').addClass('active').parents('#pcHeader').addClass('on').find('#menuWrap').stop().slideDown('fast', function () {
            $(this).prev().prev().find('.scr_text').text('전체메뉴 닫기');
            $('#menuWrap [data-link="first"]').focus();
        });
        return false;
    });

    //메뉴열기 클릭
    var _mgnb = $('#mGnb');
    _mgnb.find('ul li ul').hide();
    $('.mgnb .btn_open').on('click', function () {
        if ($(this).hasClass('active')) { //닫기
          _mgnb.stop().animate({bottom: '100%'}, 300, function () {
            $(this).css({display: 'none'}).find('ul li.on').removeClass('on').children('ul').stop().slideUp();
          });
    
          $(this).removeClass('active').find('.blind-b').text('메뉴 열기');
        } else {    //열기
           
          $(this).addClass('active').find('.blind-b').text('메뉴 닫기');
    
          //가정처음과 마지막에서 #gnb 외부로 포커스가 나가지 않도록 제어
          var $first = _mgnb.find('[data-link="first"]');
          var $last = _mgnb.find('[data-link="last"]');
    
          _mgnb.css({display: 'block'}).stop().animate({bottom: 0}, 300, function () {
            $first.focus();   //대상 엘리먼트에 포커스를 강제로 이동
          });
    
          //첫번째 a 태그에서 shift+tab을 눌러 header의 영역으로 포커스가 이동하지 못하게 제한
          $first.on('keydown', function (e) {
            console.log(e.keyCode);   //tab을 클릭하면 9를 반환
            if ( e.shiftKey && e.keyCode == 9) {
              e.preventDefault();   //포커스 이동을 강제로 제한
              $last.focus();        //처음 포커스로 이동, #gnbWrap을 벗어나지 않고 순환됨
            }
          });
          //마지막 버튼 태그에서 tab을 눌러 container의 영역으로 포커스가 이동하지 못하게 제한
          $last.on('keydown', function (e) {
            if ( !e.shiftKey && e.keyCode == 9) {
              e.preventDefault();
              $('.btn_menu').focus();
            }
          });
    
        }
    
        //depth1 a click
        _mgnb.find('>ul>li>a').on('click', function () {
          if ($(this).next().size() === 0) {	//depth1 <a>만 있는 경우
            //console.log($(this).next().size());
            location.href=$(this).attr("href");
          }else {								//depth2 <ul>도 있는 경우
            //console.log($(this).next().size());
            //초기화 : 미리 열려진 컨텐츠 처음으로 되돌리기
            $(this).parent().siblings().removeClass('on').find('ul').stop().slideUp("fast");
    
            $(this).next().stop().slideToggle("fast").parent().toggleClass('on');
          }
    
          return false;
        });
      });

});