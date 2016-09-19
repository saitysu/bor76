jQuery(document).ready(function () {

    var sliderOnMain = $('.slidersBlock .slider');

    sliderOnMain.slick({
        arrows:true
        ,dots:true
        ,draggable:true
        ,infinite:false
        , respondTo: 'window'
        , adaptiveHeight:true


    });

    var sliderService = $('.service .inner');

    sliderService.slick({
        arrows:true
        ,dots:false
        ,draggable:true
        ,infinite:false
        , respondTo: 'window'
        , adaptiveHeight:true


    });

    $(".main .head .menu").pin();

    $('a[href^="#"]').click(function () {
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        if($.browser.safari){
            $('body').animate( { scrollTop: destination }, 1100 );
        }else{
            $('html').animate( { scrollTop: destination }, 1100 );
        }
        return false;
    });




});