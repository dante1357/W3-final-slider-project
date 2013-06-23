/*jshint strict:true, noarg:true, noempty:true, eqeqeq:true, bitwise:true, undef:true, unused:true, nonew:true, browser:true, devel:true, boss:true, curly:false, immed:false, latedef:true, newcap:true, plusplus:false, trailing:true, debug:false, asi:false, evil:false, expr:true, eqnull:false, esnext:false, funcscope:false, globalstrict:false, loopfunc:false */
(function($){
  "use strict";
  var
    $btn = $('.btn'),
    $dokme = $('.dokme'),
    xpos,
    btnWidth = 70,
    btnWidthTtow = btnWidth/2,
    btnWidthArray = function(i){
      return btnWidthTtow+(btnWidth*i);
    },
    $slideshow = $('.slideshow'),
    $train = $slideshow.find('.train'),
    $slidesWidth = $train.find('div').width(),
    $lis = $('.bar li'),
    activeTemp = $lis.find('.active'),
    resize = function(i){
      $(window).resize(function(){
        $slidesWidth = $train.find('div').width();
        $train.css({
          'left':$slidesWidth*(-i)
        });
      });
    },
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
            btnWidthArray(i);
            if(xpos<btnWidthArray(i)){
              $dokme.animate({
                'left':btnWidth*i
              },200);
              $train.animate({
                'left': $slidesWidth*(-i)
              },1000);
              activeTemp.removeClass();
              $lis.eq(i).addClass('active');
              activeTemp = $lis.eq(i);
              break;
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
        resize(i);
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
})(window.jQuery);