$(document).ready(function(){
    $(function(){

        $('.selectbutton').hover(function(){
        $(this).toggleClass('selecterChange');
        });
        $('.selectimg').click(function(){
        $(this).closest('.selecter').find('.selectimg').removeClass('selecterClick');
        $(this).addClass('selecterClick');
        });
        $('#all').click(function(){
        $('.selecter').find('.selectimg').removeClass('selecterClick');
            
        });


        $('.content').show();//default show 

        $('#all').click(function(){
            $('.vege, .fish, .pasta, .rice, .sandwich, .bento, .meat').fadeIn(500);
        });
        
        $('#meat').click(function(){
            $('.vege, .fish, .pasta, .rice, .sandwich, .bento, .meat').fadeOut(500);
            $('.meat').fadeIn(500);    
        });
        $('#fish').click(function(){
            $('.vege, .fish, .pasta, .rice, .sandwich, .bento, .meat').fadeOut(500);
            $('.fish').fadeIn(500);   
        });
        $('#vege').click(function(){
            $('.vege, .fish, .pasta, .rice, .sandwich, .bento, .meat').fadeOut(500);
            $('.vege').fadeIn(500);        
        });
        $('#pasta').click(function(){
            $('.vege, .fish, .pasta, .rice, .sandwich, .bento, .meat').fadeOut(500);
            $('.pasta').fadeIn(500);        
        });
        $('#rice').click(function(){
            $('.vege, .fish, .pasta, .rice, .sandwich, .bento, .meat').fadeOut(500);
            $('.rice').fadeIn(500);        
        });
        $('#sandwich').click(function(){
            $('.vege, .fish, .pasta, .rice, .sandwich, .bento, .meat').fadeOut(500);
            $('.sandwich').fadeIn(500);        
        });
        $('#bento').click(function(){
            $('.vege, .fish, .pasta, .rice, .sandwich, .bento, .meat').fadeOut(500);
            $('.bento').fadeIn(500);        
        });

    })
})