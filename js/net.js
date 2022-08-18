(($)=>{

  class net{
    init(){
      this.header();
      this.section1();
      this.section2();
      this.section3();
      this.section4();
    }
    header(){
      
    }
    section1(){
      //1.메인슬라이드
      let cnt = 0;
      let setId=0;


      function mainSlide(){
        $('.slide').css({zIndex:2}).stop().animate({opacity:1},0);
        $('.slide').eq(cnt).css({zIndex:3});
        $('.slide').eq(cnt).css({zIndex:4});
        $('.slide').eq(cnt).css({zIndex:5});
        $('.slide').eq(cnt===0?4:cnt-1).css({zIndex:6}).stop().animate({opacity:0},1000);
        pageBtn()
      }
      
      //2-1.다음카운트
      function nextCount(){
        cnt++;
        cnt>4?cnt=0:cnt; 
        mainSlide();

      }
      //2-2.이전카운트
      function prevCount(){
        cnt--;
        mainSlide();
      }      
      //3.자동타이머
      function autoTimer(){
        setId=setInterval(nextCount, 5000);
      }
      autoTimer()

    function pageBtn(){
      $('.slide-box').removeClass('on');
      $('.slide-box').eq(cnt>4?0:cnt).addClass('on');


      }

      $('.slide-box').each(function(idx){
        $(this).click(function(){
        stopfn();
        cnt=idx;
        mainSlide();
       });
      });
      
      $('.play-stop').click(function(){
        clearInterval(setId);
       if($(this).children().hasClass('fa-pause')){ 
        clearInterval(setId);
        $(this).children().removeClass('fa-pause');
        $('.back-slide').addClass('stop');
        $(this).children().addClass('fa-play');
        $('.back-slide').removeClass('go');
       }
       else{
        autoTimer();
        $(this).children().removeClass('fa-play');
        $('.back-slide').removeClass('stop');
        $(this).children().addClass('fa-pause');
        $('.back-slide').addClass('go');
       }

      });


      function stopfn(){
        clearInterval(setId);
        $('.play-stop').children().removeClass('fa-play');
        $('.back-slide').removeClass('stop');
        playfn()

      }
      //플레이함수
      function playfn(){
      autoTimer();
      $('.play-stop').children().attr('class','fa-pause');

  
}

      
    }
   section2(){

   }
   section3(){
    $(".tv-list ul li a").click(function(){
      $(this).toggleClass('play')
      var youtube = 'https://www.youtube.com/embed/'+$(this).data('url')+'?autoplay=1';
      $("#youtube").attr('src',youtube);
      return false;

  });
      $(".tv-list ul li a").click(function(){
      $(".tv-list ul li a").not(this).removeClass('play');
      $(this).addClass('play');



});
   }



















    
  }

  const newNet = new net()
  newNet .init();



})(jQuery);