$(document).ready(function() {
  $('.to_top').click(function(event) {
    event.preventDefault();
    $('html,body').animate({
      scrollTop: 0}, 1000);
   });

    $('.showmenu').on('click',  function(e){
       e.preventDefault();
       $('.nav').toggleClass('menu-show');
   });

   $('.to_feature').click(function(event) {
    event.preventDefault();
    $('html,body').animate({
      scrollTop: $("#feature") .offset().top}, 1000);
   });

   $('.to_chef').click(function(event) {
    event.preventDefault();
    $('html,body').animate({
      scrollTop: $("#chef") .offset().top - 50}, 1000);
   });

   $('.to_reserve').click(function(event) {
    event.preventDefault();
    $('html,body').animate({
      scrollTop: $("#reserve") .offset().top}, 1000);
   });
 });
