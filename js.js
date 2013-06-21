/*jshint strict:true, noarg:true, noempty:true, eqeqeq:true, bitwise:true, undef:true, unused:true, nonew:true, browser:true, devel:true, boss:true, curly:false, immed:false, latedef:true, newcap:true, plusplus:false, trailing:true, debug:false, asi:false, evil:false, expr:true, eqnull:false, esnext:false, funcscope:false, globalstrict:false, loopfunc:false */
(function($){
  "use strict";
  var
    $btn = $('.btn'),
    $dokme = $('.dokme'),
    xpos,
    btnWidth = 70,
    btnWidthTtow = 70/2,
    $btnWidthArray= [btnWidthTtow,btnWidthTtow+(btnWidth*1),btnWidthTtow+(btnWidth*2),btnWidthTtow+(btnWidth*3),btnWidthTtow+(btnWidth*4),btnWidthTtow+(btnWidth*5),btnWidthTtow+(btnWidth*6),btnWidthTtow+(btnWidth*7),btnWidthTtow+(btnWidth*8)],
    $slideshow = $('.slideshow'),
    $train = $slideshow.find('.train'),
    $slidesWidth = $train.find('div').width(),
    $lis = $('.bar li'),
    activeTemp = $lis.find('.active'),
    moveDokme = function(){
      $dokme.draggable({
        containment: $btn,
        axis: "x",
        start: function(event, ui) {
          xpos = ui.position.left;
        },
        stop: function(event, ui) {
          xpos = ui.position.left;
          for(var i=0;i<9;i++){
            if(xpos<$btnWidthArray[i]){
              var
                n=i;
                i=9;
              $dokme.animate({
                'left':btnWidth*n
              },200);
              $train.animate({
                'left': $slidesWidth*(-n)
              },1000);
              activeTemp.removeClass();
              $lis.eq(n).addClass('active');
              activeTemp = $lis.eq(n);
            }
          }
        }
      });
    },
    moveWithLis = function(i){
      $lis.eq(i).click(function(){
        $dokme.animate({
          'left':btnWidth*i
        },200);
        $train.animate({
          'left':$slidesWidth*(-i)
        },1000);
        activeTemp.removeClass();
        $(this).addClass('active');
        activeTemp = $(this);
      });
    },
    lisClick = function(){
      for (var i = 0; i < 9; i++) {
        moveWithLis(i);
      }
    },
    allFunction = function(){
      moveDokme();
      lisClick();
    };
    allFunction();
    $(window).resize(function(){
      $slidesWidth = $train.find('div').width();
      $train.css({
        'left':$slidesWidth*(-1)
      });
    });
})(window.jQuery);