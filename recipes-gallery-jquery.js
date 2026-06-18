$(document).ready(function(){
    $(function(){

    $('.selectbutton').hover(function(){
        $(this).toggleClass('selecterChange');
    });

    $('#all').click(function(){
        $('.selectimg').removeClass('selecterClick');
        $('.content').stop(true, true).fadeIn(500);
    });

    $('.selectbutton').click(function(){
        const category = this.id;

        $('.selectimg').removeClass('selecterClick');
        $(this).find('.selectimg').addClass('selecterClick');

        $('.content').stop(true, true).hide();
        $('.content.' + category).stop(true, true).fadeIn(500);
    });

});

})