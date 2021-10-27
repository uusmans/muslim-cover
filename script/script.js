$(document).ready(function(){
    $(".btn_menu,.close").on('click',function(){
        $(".menu").fadeToggle();
        $('body').toggleClass('scroll_hidden');
    })
})

