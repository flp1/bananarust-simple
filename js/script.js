$(document).ready(function() {
    
    
    /* Scroll on buttons */
    $('.js--scroll-to-footer').click(function() {
        $('html, body').animate({scrollTop: $('.js--footer').offset().top}, 1000);
    });
    
    $('.js--scroll-to-teamsection').click(function() {
        $('html, body').animate({scrollTop: $('.js--teamsection').offset().top}, 1000);
    });
    
});