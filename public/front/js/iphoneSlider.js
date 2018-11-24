/*
* iPhone Slider Settings
*
* Documentation:
* http://sachinchoolur.github.io/lightslider/examples.html
* https://github.com/sachinchoolur/lightslider
*
*
*/

// SET SIZE OF SLIDER ON DISPLAY WIDTH
// -----------------------------------------------------------------------------
$(document).ready(function() {
  if($(window).width() < 1060) {
    initLightSlider('b');
  }else{
    initLightSlider('a');
  }
});

var initLightSlider = function(size){
  $(window).off("#lightSlider");
  if(size === 'a'){
    $(document).ready(function() {
      $("#lightSlider").lightSlider({
        item: 3,
        autoWidth: false,
        slideMove: 1, // slidemove will be 1 if loop is true
        slideMargin: 10,

        addClass: '',
        mode: "slide",
        useCSS: true,
        cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',//
        easing: 'linear', //'for jquery animation',////

        speed: 400, //ms'
        auto: false,
        loop: false,
        slideEndAnimation: true,
        pause: 2000,

        keyPress: false,
        controls: true,
        prevHtml: '',
        nextHtml: '',

        centerSlide:true,
        rtl:false,
        adaptiveHeight:false,

        vertical:false,
        verticalHeight:500,
        vThumbWidth:100,


        enableTouch:true,
        enableDrag:true,
        freeMove:true,
        swipeThreshold: 40
      });
    });
  } else {
    $(document).ready(function() {
      $("#lightSlider").lightSlider({
        item: 1,
        autoWidth: false,
        slideMove: 1, // slidemove will be 1 if loop is true
        slideMargin: 10,

        addClass: '',
        mode: "slide",
        useCSS: true,
        cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',//
        easing: 'linear', //'for jquery animation',////

        speed: 400, //ms'
        auto: false,
        loop: false,
        slideEndAnimation: true,
        pause: 2000,

        keyPress: false,
        controls: true,
        prevHtml: '',
        nextHtml: '',

        centerSlide:true,
        rtl:false,
        adaptiveHeight:false,

        vertical:false,
        verticalHeight:500,
        vThumbWidth:100,


        enableTouch:true,
        enableDrag:true,
        freeMove:true,
        swipeThreshold: 40
      });
    });
  }
}
