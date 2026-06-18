 $(document).ready(function(){
     $(function(){

        $('.section-1').animate({
        opacity: 1,
        }, 1500);


         
    var slideCount = $('#slider ul li').length;// 4 items
    var slideHeight = $('#slider ul li').height();//300px
    var slideWidth = $('#slider ul li').width();//500px

    var sliderUlWidth = slideCount * slideWidth; // 4 * 500 = 2,000px
    $('#slider').css({ width: slideWidth, height:slideHeight});//container for ul
    $('#slider ul').css({ width: sliderUlWidth, marginLeft: -slideWidth});//container for all items

    $("#slider ul li:last-child").prependTo('#slider ul');

    // FUNCTIONS
    function moveLeft(){
        $('#slider ul').animate({
            left: '+=' + slideWidth 
        }, 500, function(){
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    }
    // trigger
    $('a.control-prev').click(function(){

        moveLeft();
        
    });

    function moveRight(){
        $('#slider ul').animate({
            left: '-=' + slideWidth
        },500, function(){
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    }

    // trigger
    $('a.control-next').click(function(){

        moveRight();
        
    });

    var timer = setInterval(moveRight, 3500);

    $('#slider').hover(
        function(){
            clearInterval(timer);
        },
        function(){
            timer = setInterval(moveRight, 3500);
        }
    );



     })
 })