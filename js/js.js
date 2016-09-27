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


    setTimeout(function() {

      //  $("#vsRasp .whiteFone").append('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?sid=AgTAIZzORXuq6g4zMNJTwikNqmSguaU7&amp;width=1075&amp;height=634&amp;lang=ru_RU&amp;sourceType=constructor&amp;scroll=true"></script>')

    }, 2000);





});