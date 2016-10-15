jQuery(document).ready(function () {

    var sliderOnMain =    $('.slidersBlock .slider:nth-child(2n+1)');
    var sliderOnMainRev = $('.slidersBlock .slider:nth-child(2n)');

    var arTitle =
        [
            "Главная",
            "Расположение",
            "Инфраструктура",
            "Документация",
            "Генплан",
            "Фотогалерея"
        ];

    var arTitleInverse =
        [
            "Фотогалерея",
            "Генплан",
            "Документация",
            "Инфраструктура",
            "Расположение",
            "Главная"
        ];

    sliderOnMain.slick({
        arrows:true
        ,dots:true
        ,customPaging: function(slider, i) {
            return '<span class="dot">' + arTitle[i] + '</span><span class="ico"></span>';
        }
        ,draggable:true
        ,infinite:false
        ,respondTo: 'window'
        ,adaptiveHeight:true
    });

    sliderOnMainRev.slick({
        arrows:true
        ,dots:true
        ,customPaging: function(slider, i) {
            return '<span class="dot">' + arTitleInverse[i] + '</span><span class="ico"></span>';
        }
        ,draggable:true
        ,infinite:false
        ,initialSlide:'5'
        ,respondTo: 'window'
        ,adaptiveHeight:true
    });

    var sliderService = $('.service .inner');

    sliderService.slick({
        arrows:true
        ,dots:false
        ,draggable:true
        ,infinite:false
        ,respondTo: 'window'
        ,adaptiveHeight:true
    });

    // $(".main .head .menu").pin();


    // Cache selectors
    var lastId,
        topMenu = $("#top-menu"),
        topMenuHeight = topMenu.outerHeight()+15,
        // All list items
        menuItems = topMenu.find("a"),
        // Anchors corresponding to menu items
        scrollItems = menuItems.map(function(){
            var item = $($(this).attr("href"));
            if (item.length) { return item; }
        });

// Bind click handler to menu items
// so we can get a fancy scroll animation
    menuItems.click(function(e){
        var href = $(this).attr("href"),
            offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
        $('html, body').stop().animate({
            scrollTop: offsetTop
        }, 300);
        e.preventDefault();
    });

// Bind to scroll
    $(window).scroll(function(){
        // Get container scroll position
        var fromTop = $(this).scrollTop()+topMenuHeight;

        // Get id of current scroll item
        var cur = scrollItems.map(function(){
            if ($(this).offset().top < fromTop)
                return this;
        });
        // Get the id of the current element
        cur = cur[cur.length-1];
        var id = cur && cur.length ? cur[0].id : "";

        if (lastId !== id) {
            lastId = id;
            // Set/remove active class
            menuItems
                .parent().removeClass("active")
                .end().filter("[href='#"+id+"']").parent().addClass("active");
        }
    });

    $('.fancybox').fancybox();


    /* Меню на слайде */
    $(".size1024 .element .mainSl .menuEl a").click(
        function (e) {
            e.preventDefault();
            var thisEl = $(this);
            var dataUrl = thisEl.data('menu');
            if(dataUrl !='mainSl'){
                thisEl.closest(".element").find(".mobileSl").hide();
                thisEl.closest(".element").find('.'+dataUrl).fadeIn(300);
                thisEl.closest(".element").find(".menu").fadeIn(300);
            }
        }
    );

    $(".itemMenu.backToMain a").click(
        function (e) {
            e.preventDefault();
            $(this).closest(".menu").hide();
            $(this).closest(".element").find(".blockMenu").removeClass('act');
            $(".mainSl").fadeIn(300).siblings('.mobileSl').hide();

        }
    );

    $(".itemMenu.showMenu a").click(
        function (e) {
            e.preventDefault();
            var El = $(this).closest(".element").find(".blockMenu");
            if(El.hasClass('act')){
                El.removeClass('act');
            }
            else{
                El.addClass("act");
            }
        }
    );

    $(".element .blockMenu a").click(
        function (e) {
            e.preventDefault();
            var thisEl = $(this);
            var dataUrl = thisEl.data('menu');

            $(".size1024 .mobileSl").hide();
                thisEl.closest(".element").find(".mobileSl").hide();
                thisEl.closest(".element").find('.'+dataUrl).fadeIn(300);
                thisEl.closest(".element").find(".menu").fadeIn(300);
                thisEl.closest(".element").find(".blockMenu").removeClass('act');
        }
    );


    /* Открытие мини карты */

    $(".elem_ground .marker a").click(
        function (e) {
            e.preventDefault();
            var thisEl = $(this);
            var tabId = $(this).data('id');
            console.log(tabId);
            thisEl.closest('.genSl').find('.map_block').fadeIn(300);
            thisEl.closest('.genSl').find('.baloon').hide();
            thisEl.closest('.genSl').find('.house'+tabId).find('.baloon').fadeIn(300);

        }
    );

    $(".map_block").click(
        function (e) {
            e.preventDefault();
            $(this).fadeOut(300);
        }

    );



});























