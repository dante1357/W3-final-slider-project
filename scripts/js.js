/*jshint strict:true, noarg:true, noempty:true, eqeqeq:true, bitwise:true, undef:true, unused:true, nonew:true, browser:true, devel:true, boss:true, curly:false, immed:false, latedef:true, newcap:true, plusplus:false, trailing:true, debug:false, asi:false, evil:false, expr:true, eqnull:false, esnext:false, funcscope:false, globalstrict:false, loopfunc:false */
(function($){
  "use strict";
  function updateSite(event){
    window.applicationCache.swapCache();
    window.location.reload();
  }
  window.applicationCache.addEventListener('updateready',updateSite, false);
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
    as = $lis.find('a'),
    activeTemp = $lis.find('.active'),
    resize = function(i){
      $(window).resize(function(){
        $slidesWidth = $train.find('div').width();
        $train.css({
          'left':$slidesWidth*(-i)
        });
      });
    },
    moveTrain = function(i){
      $train.stop().animate();
      $train.animate({
        'left': $slidesWidth*(-i)
      },1000);
      activeTemp.removeClass();
      as.eq(i).addClass('active');
      activeTemp = as.eq(i);
    },
    moveDokme = function(i){
      $dokme.stop().animate();
      $dokme.animate({
        'left':btnWidth*i
      },200);
    },
    moveWithDokme = function(){
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
              moveDokme(i);
              moveTrain(i);
              break;
            }
          }
        }
      });
    },
    moveWithLis = function(i){
      $lis.eq(i).click(function(){
        moveDokme(i);
        moveTrain(i);
        resize(i);
      });
    },
    lisClick = function(){
      for (var i = 0; i < 9; i++) {
        moveWithLis(i);
      }
    },
    ajax = function(){
      $.address.change(function(evt){
        console.log(evt.pathNames);
        if(!evt.pathNames.length){
          $.address.value('/Fashion/0');
        }
        if(evt.pathNames[0]==='Fashion'){
          moveDokme(evt.pathNames[1]);
          moveTrain(evt.pathNames[1]);
          resize(evt.pathNames[1]);
        }
      });
      as.address();
    },
    allFunction = function(){
      moveWithDokme();
      lisClick();
      ajax();
    };
    allFunction();
})(window.jQuery);