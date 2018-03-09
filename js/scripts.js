$(document).ready(function() {
  // Initialize mobile navbar.
  $(".button-collapse").sideNav() ;
  // Initialize What I Do section.
  document.getElementById("what-i-do-pd").click() ;
  // Initialize slider.
  $("#lightSliderDesktop").lightSlider({
    item: 1,
    autoWidth: true,
    slideMove: 1, // slidemove will be 1 if loop is true
    slideMargin: 10,
    keyPress: true,
    pager: false,
    enableTouch: true,
  });

  $("#lightSliderMovil").lightSlider({
    item: 1,
    autoWidth: false,
    slideMove: 1, // slidemove will be 1 if loop is true
    slideMargin: 10,
    pager: false,
    gallery: true,
    enableTouch: true,
    enableDrag:true,
    freeMove:true,
    swipeThreshold: 40,
    responsive : [ {
        breakpoint:800,
        settings: {
          item:3,
          slideMove:1,
          slideMargin:6,
          }
      }, {
        breakpoint:480,
        settings: {
          item:1,
          slideMove:1
        }
      }
    ],
  });
});

// What I Do Style Changing

$(".what-i-do").click(function(){

  var elemento = $(this).attr("id") ;

  $("#what-i-do").removeClass().addClass(elemento) ;

  $(".what-i-do-active").removeClass("what-i-do-active") ;
  $(".active-title").removeClass("active-title") ;
  $(".active-subtitle").removeClass("active-subtitle") ;

  $(this).addClass("what-i-do-active") ;
  $(this).find(".what-i-do-title").addClass("active-title") ;
  $(this).find(".what-i-do-subtitle").addClass("active-subtitle") ;

  $("#what-i-do-img").attr("src","/img/what-i-do/" + elemento + ".png") ;

}) ;

// Change corner style depending on current section.

$(".section-link").click(function(){
  $(".section-active").removeClass("section-active") ;
  $(this).addClass("section-active") ;
}) ;

// Call specific profile template

$(".has-profile").click(function(){
  var elemento = $(this).attr("id") ;
  sessionStorage.setItem('elemento', elemento) ;
  window.location.href = "project.html";
}) ;

// Smooth Scrolling

$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event) {
  if(location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname){
    var target = $(this.hash) ;
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']') ;
    if (target.length) {
      event.preventDefault() ;
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        var $target = $(target) ;
        $target.focus() ;
        if ($target.is(":focus")) {
          return false ;
        } else {
          $target.attr('tabindex','-1') ;
          $target.focus() ;
        } ;
      }) ;
    }
  }
}) ;
