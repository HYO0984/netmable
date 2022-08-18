(($)=>{

    class net{
      init(){
        this.header();
        this.section1();
        this.section2();
        this.section3();
        this.section4();
        this.section5();
        this.section6();
        this.section7();
        this.section8();
        this.gotop();
        this.godown();
      }
  header(){
        let t = false; 
        let t2 = false;

    $('.mobile-btn').on({
      click: function(){
          $(this).toggleClass('on');
          $('#nav').stop().slideToggle(300);
      }
    });

      //기본값
      $('.sub').stop().slideUp(0);

       //반응형
       $(window).resize(function(){
         resizeNav();
       });

      function resizeNav(){
        if( $(window).width()<= 1170 ){
              $('.mobile-btn').removeClass('on');
              $('#nav').stop().hide();
              t2=false; //데스크탑  토글 초기화
              if(t===false){
                t=true;
                // 마우스 오버 이벤트 삭제
                $('.sub').stop().fadeOut(0);
                $('.main-btn').off('mouseenter');   
                $('.main-btn').bind({
                    click: function(event){
                      $(this).next().stop().slideToggle(300); 
                    }
                });
              }
        }
        else {
            $('.mobile-btn').removeClass('on');
            $('#nav').stop().show();
            t=false; //모바일  토글 초기화
            if(t2===false){                 
               t2=true;
              // 마우스 오버 이벤트 삭제
              $('.main-btn').off('click');
              $('.main-btn').on('mouseenter');
              $('.sub').stop().slideUp(0); 

              $('.main-btn').on({
                  mouseenter: function(){
                    $('.sub').stop().fadeOut(0); 
                    $(this).next().stop().fadeIn(300); 
                  }
              });

              $('#nav').on({
                  mouseleave: function(){
                    $('.sub').stop().fadeOut(300); 

                  }
              });

              $('.sub-btn').on({
                  mouseenter: function(){
                    $('.sub-sub').stop().fadeOut(0); 
                    $(this).next().stop().fadeIn(300);
                  }
              });
              $('.have').on({
                  mouseleave: function(){
                    $('.sub-sub').stop().fadeOut(300); 
                  }
              });
            }
        }

    }
    resizeNav();


        //메인
        $('.main-btn').on({
          mouseenter:function(){
            $('.sub').stop().fadeOut(0)
            $(this).next().stop().fadeIn(300)
          }
        });
        $('#nav').on({
          mouseleave:function(){
            $('.sub').stop().fadeOut(300)
          }
        });
        //서브
        $('.sub-btn').on({
          mouseenter:function(){
            $('.sub-sub').stop().fadeOut(0)
            $(this).next().stop().fadeIn(300)
          }
        });
        $('.have').on({
          mouseleave:function(){
            $('.sub-sub').stop().fadeOut(300)
          }
        });
        //언어
        $('.lang-box').on({
          mouseenter:function(){
            $('.kr').stop().fadeOut(0)
            $('.kr').stop().fadeIn(300)
          }
        });
        $('.lang-box').on({
          mouseleave:function(){
            $('.kr').stop().fadeOut(300)
          }
        });
        //로그인
        $('.my').on({
          mouseenter:function(){
            $('.login-menu').stop().fadeOut(0)
            $('.login-menu').stop().fadeIn(300)
          }
        });
        $('.my').on({
          mouseleave:function(){
            $('.login-menu').stop().fadeOut(300)
  
          }
        });
              
        let upDown = '';
        let newTop= $(window).scrollTop();
        let oldTop = newTop; 
  
        $(window).scroll(()=>{
  
          newTop= $(window).scrollTop();
          upDown = oldTop - newTop > 0 ? 'UP' : 'DOWN';
  
          if(upDown==='UP'){
            $('#header').addClass('down')
          }
          if(upDown==='DOWN'){
            $('#header').addClass('down')
          }
          if($(window).scrollTop()===0){
            $('#header').removeClass('down')
          }
  
          oldTop = newTop; 
  
        });
        }
      section1(){
        //1.메인슬라이드
        let cnt = 0;
        let cnt2 = 0;

        let setId = 0;
        let setId2 = 0;

        function mainSlide(){
          $('.slide').css({zIndex:3}).stop().animate({opacity:1},0);
          $('.slide').eq(cnt).css({zIndex:4});
          $('.slide').eq(cnt).css({zIndex:5});
          $('.slide').eq(cnt===0?3:cnt-1).css({zIndex:6}).stop().animate({opacity:0},1000);

          pageBtn();
          if(cnt===2){
            $('#section1').addClass('slideAni1')
          }
          else{
            $('#section1').removeClass('slideAni1')

          }
          if(cnt===3){
            $('#section1').addClass('slideAni2')
          }
          else{
            $('#section1').removeClass('slideAni2')

          }

        }
        
        //2-1.다음카운트
        function nextCount(){
          cnt++;
          cnt>3?cnt=0:cnt; 
          mainSlide();
        }
        //2-2.이전카운트
        function prevCount(){
          cnt--;
          cnt<0?cnt=3:cnt; 
          mainSlide();
        }      
        //3.자동타이머
        function autoTimer(){
         setId = setInterval(nextCount, 6000);
        }
        autoTimer()
        
        
        //4-1. 페이지 버튼 함수
         function pageBtn(){
         $('.swiper').removeClass('on');
         $('.swiper').eq(cnt>3?0:cnt).addClass('on');
        }

        //4-2.페이지버튼('.swiper')클릭(click)이벤트 
         $('.swiper').each(function(idx){
          $(this).click(function(){
          cnt=idx;
          stopfn()
          mainSlide()

        });

        });
         //5-1. 다음화살표
         $('.next-btn').click(function(){
          stopfn()
          nextCount();

         });

         //5-2. 이전화살표
         $('.prev-btn').click(function(){
          stopfn()
          prevCount();

         });
         
         //6.정지 함수
         function stopfn(){
          clearInterval(setId);
          clearInterval(setId2);
         cnt2 =0;
         setId2=setInterval(function(){
           cnt2++
           if(cnt2>5){
            clearInterval(setId2);
            playfn();
           }
         },1000);
        
        }
        function playfn(){
          autoTimer();

        }
        








      } 



      
      section2(){
        let winH = $(window).height();
        let sec2Top = $('#section2').offset().top-winH
  
        $(window).scroll(function(){
          if($(window).scrollTop()===0){
            $('#section2').removeClass('titleAni , sec2Ani')
          }
          if($(window).scrollTop() > sec2Top){
            $('#section2').addClass('titleAni , sec2Ani')
          }
  
        })
      }
      section3(){
        let cnt = 0;
        let setId = 0 ;
        let setId2 = 0 ;
        let conW = $('#section3 .container').width(); 

        //터치 스와이프
        let touStart = null;
        let touEnd = null;
        let result = '';

         //드래그앤드롭
        let dragStart = null;
        let dragEnd = null;
        let mouseDown =false;

      //1.메인슬라이드
      function sec3Slide(){
        $('.slide-wrap.sec3').stop().animate({left:-conW*cnt},600,'easeInOutExpo',function(){
          cnt>1?cnt=0:cnt;
          cnt<0?cnt=1:cnt;
        $('.slide-wrap.sec3').stop().animate({left:-conW*cnt}, 0 ) 

        });
        pageBtn();
      }
      //2-1.다음카운트
      function nextCount(){
        cnt++;
        sec3Slide();
      }
      //2-2.이전카운트
      function prevCount(){
        cnt--;
        sec3Slide();
      }      
      //3.자동타이머
      function autoTimer(){
        setId=setInterval(nextCount, 6000)
      }
      autoTimer()

      
      function timerfn(){
        let cnt2 = 0;
        setId2=setInterval(function(){
          cnt2++;
          if(cnt2>=1){ 
            clearInterval(setId); 
            clearInterval(setId2);
            autoTimer();
          }
        },1000)  
      }

      $('#section3 .container').on({
        mousedown:function(e){
          timerfn();
          touStart = e.clientX;
          dragStart = e.clientX-$('#section3 .slide-wrap').offset().left-conW;
          mouseDown =true;

        },
        mouseup:function(e){
          touEnd= e.clientX;
          result = touStart-touEnd > 0 ? 'NEXT' : 'PREV';
          //절대값(abs)   - 30 부호와 절대값(30) + 50 부호(+)와 절대값(50)
          if(Math.abs(touStart-touEnd) > 30 ){//터치 길이가 적어도 50픽셀 이상 이면 다음 , 이전 슬라이드
              if(result==='NEXT'){
                if(!$('#section3 .slide-wrap').is(':animated')){
                nextCount(); 
                }
              }
              if(result==='PREV'){
                if($('#section3 .slide-wrap').is(':animated')){
                prevCount();
                }
              }
            }
          mouseDown = false;
          },
        mouseleave:function(e){
          if(!mouseDown){return;}
          touEnd = e.clientX;
          if(Math.abs(touStart-touEnd) > 30 ){
          result = touStart-touEnd > 0 ? 'NEXT' : 'PREV';
          if(result==='NEXT'){
            if(!$('#section3 .slide-wrap').is(':animated')){
              nextCount(); 
            }  
          }
          if(result==='PREV'){
            if(!$('#section3 .slide-wrap').is(':animated')){
              prevCount();
              } 
            }  
          }
           mouseDown =false;
        },
        mousemove:function(e){
        if(!mouseDown){return;}
        dragEnd = e.clientX;
        $('#section3 .slide-wrap').css({left: dragEnd - dragStart});
        
        }

      });

 
      //4-1. 페이지 버튼 함수
      function pageBtn(){
        $('.sec3-swiper').removeClass('on');
        $('.sec3-swiper').eq(cnt>1?0:cnt).addClass('on');
      }

      //4-2.페이지버튼('.swiper')클릭(click)이벤트 
        $('.sec3-swiper').each(function(idx){
        $(this).click(function(){
        timerfn()
        cnt=idx;
        sec3Slide()
      });  
     });  

     let winH = $(window).height();
     let sec3Top = $('#section3').offset().top-winH

     $(window).scroll(function(){
       if($(window).scrollTop()===0){
         $('#section3').removeClass('titleAni')
       }
       if($(window).scrollTop() > sec3Top){
         $('#section3').addClass('titleAni')
       }

     });

      
      }
      section4(){
      let idx = 0;
      let winW = $('#section4 .best-wrap').width();
      let cols = 4; //해상도 크기별 조건문 4 3 2 1
      let imgW = winW/cols;
      let imgH = imgW*1;
      let n = $('#section4 .best-item').length;
      let h = $('#section4 .best-item.hide').length;
      let rows = Math.ceil((n-h)/cols);

      $(window).resize(function(){              
        bestItem();
      });

      $('#section4 .best-btn').each(function(index){
        $(this).on({
          click: function(e){
            e.preventDefault();
            idx = index; //클릭한 인덱스 번호
            bestItem();
            $('.best-btn').removeClass('on');
            $(this).addClass('on');
            $('#section4').removeClass('sec4Ani')
          }           
        });
    });
    
    function bestItem(){
      winW = $('#section4 .best-wrap').width();
      if(winW >= 1280){
        cols = 5;
      }
      else if(winW>=1024){
        cols = 4;
      }
      else if(winW>=840){ 
        cols = 3;
      }
      else if(winW>=600){ 
        cols = 2;
      }
      else {
        cols = 1;
      }
      imgW = winW/cols;
      imgH = imgW*1;
  
      $('#section4 .best-item').removeClass('zoom'); //줌 효과 삭제 초기화
      $('#section4 .best-item').stop().animate({width:imgW,height:imgH}).removeClass('hide'); //초기화
      $('#section4 .best-item .best-wrap').css({width:imgW});
  
        if(idx===0){
        switch(cols){
        case 5:
          $('.best-item').eq(0).show().stop().animate({left:imgW * 0,top:imgH * 0}, 300);
          $('.best-item').eq(1).show().stop().animate({left:imgW * 1,top:imgH * 0}, 300);
          $('.best-item').eq(2).show().stop().animate({left:imgW * 2,top:imgH * 0}, 300);
          $('.best-item').eq(3).show().stop().animate({left:imgW * 3,top:imgH * 0}, 300);
          $('.best-item').eq(4).show().stop().animate({left:imgW * 4,top:imgH * 0}, 300);

          $('.best-item').eq(5).show().stop().animate({left:imgW * 0,top:imgH * 1}, 300);
          $('.best-item').eq(6).show().stop().animate({left:imgW * 1,top:imgH * 1}, 300);
          $('.best-item').eq(7).show().stop().animate({left:imgW * 2,top:imgH * 1}, 300);
          $('.best-item').eq(8).show().stop().animate({left:imgW * 3,top:imgH * 1}, 300);
          $('.best-item').eq(9).show().stop().animate({left:imgW * 4,top:imgH * 1}, 300);

          $('.best-item').eq(10).show().stop().animate({left:imgW * 0,top:imgH * 2}, 300);
          $('.best-item').eq(11).show().stop().animate({left:imgW * 1,top:imgH * 2}, 300);
          $('.best-item').eq(12).show().stop().animate({left:imgW * 2,top:imgH * 2}, 300);
          $('.best-item').eq(13).show().stop().animate({left:imgW * 3,top:imgH * 2}, 300);
          $('.best-item').eq(14).show().stop().animate({left:imgW * 4,top:imgH * 2}, 300);
        break;
        case 4:
          $('.best-item').eq(0).show().stop().animate({left:imgW * 0,top:imgH * 0}, 300);
          $('.best-item').eq(1).show().stop().animate({left:imgW * 1,top:imgH * 0}, 300);
          $('.best-item').eq(2).show().stop().animate({left:imgW * 2,top:imgH * 0}, 300);
          $('.best-item').eq(3).show().stop().animate({left:imgW * 3,top:imgH * 0}, 300);
         
          $('.best-item').eq(4).show().stop().animate({left:imgW * 0,top:imgH * 1}, 300);
          $('.best-item').eq(5).show().stop().animate({left:imgW * 1,top:imgH * 1}, 300);
          $('.best-item').eq(6).show().stop().animate({left:imgW * 2,top:imgH * 1}, 300);
          $('.best-item').eq(7).show().stop().animate({left:imgW * 3,top:imgH * 1}, 300);
         
          $('.best-item').eq(8).show().stop().animate({left:imgW * 0,top:imgH * 2}, 300);
          $('.best-item').eq(9).show().stop().animate({left:imgW * 1,top:imgH * 2}, 300);
          $('.best-item').eq(10).show().stop().animate({left:imgW * 2,top:imgH * 2}, 300);
          $('.best-item').eq(11).show().stop().animate({left:imgW * 3,top:imgH * 2}, 300);
         
          $('.best-item').eq(12).show().stop().animate({left:imgW * 0,top:imgH * 3}, 300);
          $('.best-item').eq(13).show().stop().animate({left:imgW * 1,top:imgH * 3}, 300);
          $('.best-item').eq(14).show().stop().animate({left:imgW * 2,top:imgH * 3}, 300);
        break;
        case 3:
          $('.best-item').eq(0).show().stop().animate({left:imgW * 0,top:imgH * 0}, 300);
          $('.best-item').eq(1).show().stop().animate({left:imgW * 1,top:imgH * 0}, 300);
          $('.best-item').eq(2).show().stop().animate({left:imgW * 2,top:imgH * 0}, 300);
         
          $('.best-item').eq(3).show().stop().animate({left:imgW * 0,top:imgH * 1}, 300);
          $('.best-item').eq(4).show().stop().animate({left:imgW * 1,top:imgH * 1}, 300);
          $('.best-item').eq(5).show().stop().animate({left:imgW * 2,top:imgH * 1}, 300);
         
          $('.best-item').eq(6).show().stop().animate({left:imgW * 0,top:imgH * 2}, 300);
          $('.best-item').eq(7).show().stop().animate({left:imgW * 1,top:imgH * 2}, 300);
          $('.best-item').eq(8).show().stop().animate({left:imgW * 2,top:imgH * 2}, 300);
         
          $('.best-item').eq(9).show().stop().animate({left:imgW * 0,top:imgH * 3}, 300);
          $('.best-item').eq(10).show().stop().animate({left:imgW * 1,top:imgH * 3}, 300);
          $('.best-item').eq(11).show().stop().animate({left:imgW * 2,top:imgH * 3}, 300);
          
          $('.best-item').eq(12).show().stop().animate({left:imgW * 0,top:imgH * 4}, 300);
          $('.best-item').eq(13).show().stop().animate({left:imgW * 1,top:imgH * 4}, 300);
          $('.best-item').eq(14).show().stop().animate({left:imgW * 2,top:imgH * 4}, 300);
        break;
        case 2:
          $('.best-item').eq(0).show().stop().animate({left:imgW * 0,top:imgH * 0}, 300);
          $('.best-item').eq(1).show().stop().animate({left:imgW * 1,top:imgH * 0}, 300);

          $('.best-item').eq(2).show().stop().animate({left:imgW * 0,top:imgH * 1}, 300);
          $('.best-item').eq(3).show().stop().animate({left:imgW * 1,top:imgH * 1}, 300);

          $('.best-item').eq(4).show().stop().animate({left:imgW * 0,top:imgH * 2}, 300);
          $('.best-item').eq(5).show().stop().animate({left:imgW * 1,top:imgH * 2}, 300);

          $('.best-item').eq(6).show().stop().animate({left:imgW * 0,top:imgH * 3}, 300);
          $('.best-item').eq(7).show().stop().animate({left:imgW * 1,top:imgH * 3}, 300);

          $('.best-item').eq(8).show().stop().animate({left:imgW * 0,top:imgH * 4}, 300);
          $('.best-item').eq(9).show().stop().animate({left:imgW * 1,top:imgH * 4}, 300);

          $('.best-item').eq(10).show().stop().animate({left:imgW * 0,top:imgH * 5}, 300);
          $('.best-item').eq(11).show().stop().animate({left:imgW * 1,top:imgH * 5}, 300);

          $('.best-item').eq(12).show().stop().animate({left:imgW * 0,top:imgH * 6}, 300);
          $('.best-item').eq(13).show().stop().animate({left:imgW * 1,top:imgH * 6}, 300);

          $('.best-item').eq(14).show().stop().animate({left:imgW * 0,top:imgH * 7}, 300);
        break;
        default:
          $('.best-item').eq(0).show().stop().animate({left:imgW * 0,top:imgH * 0}, 300);
          $('.best-item').eq(1).show().stop().animate({left:imgW * 0,top:imgH * 1}, 300);
          $('.best-item').eq(2).show().stop().animate({left:imgW * 0,top:imgH * 2}, 300);
          $('.best-item').eq(3).show().stop().animate({left:imgW * 0,top:imgH * 3}, 300);
          $('.best-item').eq(4).show().stop().animate({left:imgW * 0,top:imgH * 4}, 300);
          $('.best-item').eq(5).show().stop().animate({left:imgW * 0,top:imgH * 5}, 300);
          $('.best-item').eq(6).show().stop().animate({left:imgW * 0,top:imgH * 6}, 300);
          $('.best-item').eq(7).show().stop().animate({left:imgW * 0,top:imgH * 7}, 300);
          $('.best-item').eq(8).show().stop().animate({left:imgW * 0,top:imgH * 8}, 300);
          $('.best-item').eq(9).show().stop().animate({left:imgW * 0,top:imgH * 9}, 300);
          $('.best-item').eq(10).show().stop().animate({left:imgW * 0,top:imgH * 10}, 300);
          $('.best-item').eq(11).show().stop().animate({left:imgW * 0,top:imgH * 11}, 300);
          $('.best-item').eq(12).show().stop().animate({left:imgW * 0,top:imgH * 12}, 300);
          $('.best-item').eq(13).show().stop().animate({left:imgW * 0,top:imgH * 13}, 300);
          $('.best-item').eq(14).show().stop().animate({left:imgW * 0,top:imgH * 14}, 300);
          
          }
        }
        else if(idx===1){
          $('.best-item').eq(1).hide().addClass('hide');
          $('.best-item').eq(3).hide().addClass('hide');
          $('.best-item').eq(4).hide().addClass('hide');
          $('.best-item').eq(5).hide().addClass('hide');
          $('.best-item').eq(8).hide().addClass('hide');
          $('.best-item').eq(9).hide().addClass('hide');
          $('.best-item').eq(10).hide().addClass('hide');
          $('.best-item').eq(11).hide().addClass('hide');
          $('.best-item').eq(14).hide().addClass('hide');
      switch(cols){
        case 5:
          $('.best-item').eq(0).show().stop().animate({left:imgW * 0,top:imgH * 0}, 300);
          $('.best-item').eq(2).show().stop().animate({left:imgW * 1,top:imgH * 0}, 300);
          $('.best-item').eq(6).show().stop().animate({left:imgW * 2,top:imgH * 0}, 300);
          $('.best-item').eq(7).show().stop().animate({left:imgW * 3,top:imgH * 0}, 300);
          $('.best-item').eq(12).show().stop().animate({left:imgW * 4,top:imgH * 0}, 300);

          $('.best-item').eq(13).show().stop().animate({left:imgW * 0,top:imgH * 1}, 300);
        break;
        case 4:
          $('.best-item').eq(0).show().stop().animate({left:imgW * 0,top:imgH * 0}, 300);
          $('.best-item').eq(2).show().stop().animate({left:imgW * 1,top:imgH * 0}, 300);
          $('.best-item').eq(6).show().stop().animate({left:imgW * 2,top:imgH * 0}, 300);
          $('.best-item').eq(7).show().stop().animate({left:imgW * 3,top:imgH * 0}, 300);

          $('.best-item').eq(12).show().stop().animate({left:imgW * 0,top:imgH * 1}, 300);
          $('.best-item').eq(13).show().stop().animate({left:imgW * 1,top:imgH * 1}, 300);
        break;
        case 3:
          $('.best-item').eq(0).show().stop().animate({left:imgW * 0,top:imgH * 0}, 300);
          $('.best-item').eq(2).show().stop().animate({left:imgW * 1,top:imgH * 0}, 300);
          $('.best-item').eq(6).show().stop().animate({left:imgW * 2,top:imgH * 0}, 300);

          $('.best-item').eq(7).show().stop().animate({left:imgW * 0,top:imgH * 1}, 300);
          $('.best-item').eq(12).show().stop().animate({left:imgW * 1,top:imgH * 1}, 300);
          $('.best-item').eq(13).show().stop().animate({left:imgW * 2,top:imgH * 1}, 300);
        break;
        case 2:
          $('.best-item').eq(0).show().stop().animate({left:imgW * 0,top:imgH * 0}, 300);
          $('.best-item').eq(2).show().stop().animate({left:imgW * 1,top:imgH * 0}, 300);

          $('.best-item').eq(6).show().stop().animate({left:imgW * 0,top:imgH * 1}, 300);
          $('.best-item').eq(7).show().stop().animate({left:imgW * 1,top:imgH * 1}, 300);

          $('.best-item').eq(12).show().stop().animate({left:imgW * 0,top:imgH * 2}, 300);
          $('.best-item').eq(13).show().stop().animate({left:imgW * 1,top:imgH * 2}, 300);
        break;
        default:
          $('.best-item').eq(0).show().stop().animate({left:imgW * 0,top:imgH * 0}, 300);
          $('.best-item').eq(2).show().stop().animate({left:imgW * 0,top:imgH * 1}, 300);
          $('.best-item').eq(6).show().stop().animate({left:imgW * 0,top:imgH * 2}, 300);
          $('.best-item').eq(7).show().stop().animate({left:imgW * 0,top:imgH * 3}, 300);
          $('.best-item').eq(12).show().stop().animate({left:imgW * 0,top:imgH * 4}, 300);
          $('.best-item').eq(13).show().stop().animate({left:imgW * 0,top:imgH * 5}, 300);
          }
        }
        else if(idx===2){
          $('.best-item').eq(0).hide().addClass('hide');
          $('.best-item').eq(1).hide().addClass('hide');
          $('.best-item').eq(2).hide().addClass('hide');
          $('.best-item').eq(5).hide().addClass('hide');
          $('.best-item').eq(6).hide().addClass('hide');
          $('.best-item').eq(7).hide().addClass('hide');
          $('.best-item').eq(8).hide().addClass('hide');
          $('.best-item').eq(9).hide().addClass('hide');
          $('.best-item').eq(12).hide().addClass('hide');
          $('.best-item').eq(13).hide().addClass('hide');
          switch(cols){
              case 5:
                $('.best-item').eq(3).show().stop().animate({left:imgW * 0,top:imgH * 0}, 300);
                $('.best-item').eq(4).show().stop().animate({left:imgW * 1,top:imgH * 0}, 300);
                $('.best-item').eq(10).show().stop().animate({left:imgW * 2,top:imgH * 0}, 300);
                $('.best-item').eq(11).show().stop().animate({left:imgW * 3,top:imgH * 0}, 300);
              break;
              case 4:
                $('.best-item').eq(3).show().stop().animate({left:imgW * 0,top:imgH * 0}, 300);
                $('.best-item').eq(4).show().stop().animate({left:imgW * 1,top:imgH * 0}, 300);
                $('.best-item').eq(10).show().stop().animate({left:imgW * 2,top:imgH * 0}, 300);
                $('.best-item').eq(11).show().stop().animate({left:imgW * 3,top:imgH * 0}, 300);
              break;
              case 3:
                $('.best-item').eq(3).show().stop().animate({left:imgW * 0,top:imgH * 0}, 300);
                $('.best-item').eq(4).show().stop().animate({left:imgW * 1,top:imgH * 0}, 300);
                $('.best-item').eq(10).show().stop().animate({left:imgW * 2,top:imgH * 0}, 300);
                $('.best-item').eq(11).show().stop().animate({left:imgW * 0,top:imgH * 1}, 300);
              break;
              case 2:
                $('.best-item').eq(3).show().stop().animate({left:imgW * 0,top:imgH * 0}, 300);
                $('.best-item').eq(4).show().stop().animate({left:imgW * 1,top:imgH * 0}, 300);
                $('.best-item').eq(10).show().stop().animate({left:imgW * 0,top:imgH * 1}, 300);
                $('.best-item').eq(11).show().stop().animate({left:imgW * 1,top:imgH * 1}, 300);
              break;
              default:
                $('.best-item').eq(3).show().stop().animate({left:imgW * 0,top:imgH * 0}, 300);
                $('.best-item').eq(4).show().stop().animate({left:imgW * 0,top:imgH * 1}, 300);
                $('.best-item').eq(10).show().stop().animate({left:imgW * 0,top:imgH * 2}, 300);
                $('.best-item').eq(11).show().stop().animate({left:imgW * 0,top:imgH * 3}, 300);
            }
        }
        else if(idx===3){
          $('.best-item').eq(0).hide().addClass('hide');
          $('.best-item').eq(2).hide().addClass('hide');
          $('.best-item').eq(3).hide().addClass('hide');
          $('.best-item').eq(4).hide().addClass('hide');
          $('.best-item').eq(5).hide().addClass('hide');
          $('.best-item').eq(6).hide().addClass('hide');
          $('.best-item').eq(7).hide().addClass('hide');
          $('.best-item').eq(8).hide().addClass('hide');
          $('.best-item').eq(10).hide().addClass('hide');
          $('.best-item').eq(11).hide().addClass('hide');
          $('.best-item').eq(12).hide().addClass('hide');
          $('.best-item').eq(13).hide().addClass('hide');
          switch(cols){
              case 5:
                $('.best-item').eq(1).show().stop().animate({left:imgW * 0,top:imgH * 0}, 300);
                $('.best-item').eq(9).show().stop().animate({left:imgW * 1,top:imgH * 0}, 300);
                $('.best-item').eq(14).show().stop().animate({left:imgW * 2,top:imgH * 0}, 300);
              break;
              case 4:
                $('.best-item').eq(1).show().stop().animate({left:imgW * 0,top:imgH * 0}, 300);
                $('.best-item').eq(9).show().stop().animate({left:imgW * 1,top:imgH * 0}, 300);
                $('.best-item').eq(14).show().stop().animate({left:imgW * 2,top:imgH * 0}, 300);
              break;
              case 3:
                $('.best-item').eq(1).show().stop().animate({left:imgW * 0,top:imgH * 0}, 300);
                $('.best-item').eq(9).show().stop().animate({left:imgW * 1,top:imgH * 0}, 300);
                $('.best-item').eq(14).show().stop().animate({left:imgW * 2,top:imgH * 0}, 300);
              break;
              case 2:
                $('.best-item').eq(1).show().stop().animate({left:imgW * 0,top:imgH * 0}, 300);
                $('.best-item').eq(9).show().stop().animate({left:imgW * 1,top:imgH * 0}, 300);
                $('.best-item').eq(14).show().stop().animate({left:imgW * 0,top:imgH * 1}, 300);
              break;
              default:
                $('.best-item').eq(1).show().stop().animate({left:imgW * 0,top:imgH * 0}, 300);
                $('.best-item').eq(9).show().stop().animate({left:imgW * 0,top:imgH * 1}, 300);
                $('.best-item').eq(14).show().stop().animate({left:imgW * 0,top:imgH * 2}, 300);
            }
        }
        else if(idx===4){
          $('.best-item').eq(0).hide().addClass('hide');
          $('.best-item').eq(1).hide().addClass('hide');
          $('.best-item').eq(2).hide().addClass('hide');
          $('.best-item').eq(3).hide().addClass('hide');
          $('.best-item').eq(4).hide().addClass('hide');
          $('.best-item').eq(6).hide().addClass('hide');
          $('.best-item').eq(7).hide().addClass('hide');
          $('.best-item').eq(9).hide().addClass('hide');
          $('.best-item').eq(10).hide().addClass('hide');
          $('.best-item').eq(11).hide().addClass('hide');
          $('.best-item').eq(12).hide().addClass('hide');
          $('.best-item').eq(13).hide().addClass('hide');
          $('.best-item').eq(14).hide().addClass('hide');
          switch(cols){
              case 5:
                $('.best-item').eq(5).show().stop().animate({left:imgW * 0,top:imgH * 0}, 300);
                $('.best-item').eq(8).show().stop().animate({left:imgW * 1,top:imgH * 0}, 300);
              break;
              case 4:
                $('.best-item').eq(5).show().stop().animate({left:imgW * 0,top:imgH * 0}, 300);
                $('.best-item').eq(8).show().stop().animate({left:imgW * 1,top:imgH * 0}, 300);
              break;
              case 3:
                $('.best-item').eq(5).show().stop().animate({left:imgW * 0,top:imgH * 0}, 300);
                $('.best-item').eq(8).show().stop().animate({left:imgW * 1,top:imgH * 0}, 300);
              break;
              case 2:
                $('.best-item').eq(5).show().stop().animate({left:imgW * 0,top:imgH * 0}, 300);
                $('.best-item').eq(8).show().stop().animate({left:imgW * 1,top:imgH * 0}, 300);
              break;
              default:
                $('.best-item').eq(5).show().stop().animate({left:imgW * 0,top:imgH * 0}, 300);
                $('.best-item').eq(8).show().stop().animate({left:imgW * 0,top:imgH * 1}, 300);
            }
        }

        h = $('.best-item.hide').length;
        rows = Math.ceil((n-h)/cols);     
        $('.best-wrap').stop().animate({height:imgH*rows}, 300); 
        $('.best-item').addClass('zoom');
    }//여기까지 아이템 함수



      //타이틀 애니
      let winH = $(window).height();
      let sec4Top = $('#section4').offset().top-winH
      let scr = false;


      $(window).scroll(function(){
      if($(window).scrollTop()===0){
        $('#section4').removeClass('titleAni')
      }
      if($(window).scrollTop() > sec4Top){
        $('#section4').addClass('titleAni')
      }

    });
      $(window).scroll(function(){
      if($(window).scrollTop() === 0){
      scr=false; 
      $('#section4').removeClass('sec4Ani');
      
      }
      if($(window).scrollTop() >= sec4Top ){
      if(scr===false){
      scr=true; 
      $('#section4').addClass('sec4Ani');
      }
    }
  });
















  }
  section5(){
    let winH = $(window).height();
    let sec5Top = $('#section5').offset().top-winH

    $(window).scroll(function(){
      if($(window).scrollTop()===0){
        $('#section5').removeClass('titleAni , sec5Ani')
      }
      if($(window).scrollTop() > sec5Top){
        $('#section5').addClass('titleAni , sec5Ani')
      }

    })
  }
  section6(){
    let winH = $(window).height();
    let sec6Top = $('#section6').offset().top-winH

    $(window).scroll(function(){
      if($(window).scrollTop()===0){
        $('#section6').removeClass('titleAni , sec6Ani')
      }
      if($(window).scrollTop() > sec6Top){
        $('#section6').addClass('titleAni , sec6Ani')
      }

    })
  }
  section7(){
    let winH = $(window).height();
    let sec7Top = $('#section7').offset().top-winH

    $(window).scroll(function(){
      if($(window).scrollTop()===0){
        $('#section7').removeClass('titleAni , sec7Ani')
      }
      if($(window).scrollTop() > sec7Top){
        $('#section7').addClass('titleAni , sec7Ani')
      }

    })
  }
  section8(){
    let winH = $(window).height();
    let sec8Top = $('#section8').offset().top-winH

    $(window).scroll(function(){
      if($(window).scrollTop()===0){
        $('#section8').removeClass('titleAni , sec8Ani')
      }
      if($(window).scrollTop() > sec8Top){
        $('#section8').addClass('titleAni , sec8Ani')
      }

    })
  }
  gotop(){

    $('#goTop').on({
      click:function(){
        $('html,body').stop().animate({scrollTop:0},500)
      }
    });
  }
  godown(){
    let scrollHeight = $(document).height()+$('#footer').height()
    $('#goDown').on({
      click:function(){
        $('html,body').stop().animate({scrollTop:scrollHeight},500)
      }
    });
  }















  

  

}
  
    const newNet = new net()
    newNet .init();

  
  
  })(jQuery);