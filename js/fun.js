$(document).ready(function(){
    $('.light-mode').hide();
    $('.go-up').hide();

    $('.dark-mode').click(function(){
        $(this).parent().css('background-color','black');
        $('body').css('background-color','black');
        $('.overlay .landing .intro-text p').css('color','#10CAB7');
        $('.dark-mode').hide();
        $('.light-mode').show();
    });

    $('.light-mode').click(function(){
        $(this).parent().css('background-color','rgba(0, 97, 95, 0.664)');
        $('body').css('background-color','white');
        $('.overlay .landing .intro-text p').css('color','#333');
        $('.light-mode').hide();
        $('.dark-mode').show();
    });

    $(window).scroll(function(){
        $(this).scrollTop() >= 800 ? $('.go-up').show() : $('.go-up').hide();
    });

    $('.go-up').click(function(){
        $('html,body').animate({scrollTop: 0}, 500);
    });
});