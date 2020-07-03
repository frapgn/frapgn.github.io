$(document).ready(function(){
    $('.box').mouseover(function(){
        $(this).prevAll().addClass('translate-left');
        $(this).nextAll().addClass('translate-right');
    });

    $('.box').mouseout(function(){
        $(this).prevAll().removeClass('translate-left');
        $(this).nextAll().removeClass('translate-right');
    });
});
