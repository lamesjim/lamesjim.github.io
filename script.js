$(function() {
    $(".button-collapse").sideNav();
    $('.slider').slider({full_width:true, height: 300, transition: 500, interval: 2500, indicators: false});
    $('.collapsible').collapsible({
      accordion : false
    });
});
