//MOBILE MENU
$(document).ready(function () {
    var touch = $('#mobile-menu');
    var menu = $('.menu');

    $(touch).on('click',function (e) {
        e.preventDefault();
        menu.slideToggle('slow');
    });
    $(window).resize(function () {
        var wid = $(window).width();
        if (wid > 100 && menu.is(':hidden')){
            menu.removeAttr('style');
        }
    });
});

$(function () {
    $('.categories a').each(function () {
        var location = window.location.href;
        var link = this.href;
        if(location == link) {
            $(this).addClass('ourmenu-active');
        }
    });
});

//CATGORIES MENU-MOBILE
$(document).ready(function () {
    $('.button-category button').click(function () {
        $('.categories ul').slideToggle('medium');
    });
});


//OURMENU
// ative item
$(".categories ul li").click(function () {
    $(".categories ul li").removeClass("active");
    $(this).addClass("active");
})

// mixitup
$(window).trigger("resize");
var containerEl = document.querySelector('.ourmenu');
var mixer = mixitup(containerEl);



//HEADER
$(window).scroll(function() {
    if ($(window).scrollTop() > 10) {
        $('#header').css('background-color', 'rgba(17,10,6,1');
    } else {
        $('#header').css('background-color', 'rgba(17,10,6,0');
    }
});

























//GALLERY
var temp = "<div class='cell' style='width:{width}px; height: {height}px; '><img src='images/gallery{index}.jpg'></div>";
var w = 1, html = '', limitItem = 9;
for (var i = 0; i < limitItem; ++i) {
    w = 200 +  200 * Math.random() << 0;
    html += temp.replace(/\{height\}/g, 200).replace(/\{width\}/g, w).replace("{index}", i + 1);
}
$("#freewall").html(html);
var wall = new Freewall("#freewall");
wall.reset({
    selector: '.cell',
    animate: true,
    cellW: 20,
    cellH: 200,
    onResize: function() {
        wall.fitWidth();
    }
});
wall.fitWidth();
// for scroll bar appear;
$(window).trigger("resize");









//scrollTOP
var $btnTop = $ (".btn-top")
$(window).on("scroll", function () {
    if ($(window).scrollTop()>=700){
        $btnTop.slideDown();
    }else{
        $btnTop.slideUp();
    }
});
$btnTop.on("click",function () {
    $("html,body").animate({scrollTop:0}, 900)
});

$(window).scroll(function () {
    $('.midtwo').css({'top':-$(window).scrollTop()/3})
});