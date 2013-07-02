/*jshint strict:true, noarg:true, noempty:true, eqeqeq:true, bitwise:true, undef:true, unused:true, nonew:true, browser:true, devel:true, boss:true, curly:false, immed:false, latedef:true, newcap:true, plusplus:false, trailing:true, debug:false, asi:false, evil:false, expr:true, eqnull:false, esnext:false, funcscope:false, globalstrict:false, loopfunc:false */
(function($){
  "use strict";
  var
    $load = $('.loading'),
    loading = function(){
      $load.css({
        opacity:1,
        display:'block'
      });
    },
    afterLoad = function(){
      window.onload = function(){
        $load.animate({
          opacity:0
        },700,null,function(){
          $(this).css({display:'none'});
        });
      };
    },
    allFunction = function(){
      loading();
      afterLoad();
    };
    allFunction();
})(window.jQuery);