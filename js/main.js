var h_hght = 120; // высота шапки
var h_mrg = 0; // отступ когда шапка уже не видна

$(function() {
    $(window).scroll(function() {
        var top = $(this).scrollTop();
        var elem = $('#top_nav');
        if (top + h_mrg < h_hght) {
            elem.css('top', (h_hght - top));
            $("#top-link").css("display", "none");
        } else {
            elem.css('top', h_mrg);
            $("#top-link").css("display", "block");
        }
    });
});

$(function() {
    $("a[href='#top-link']").click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false;
    });
});

$(init);

function init() {
    $('.button').bind('click', pulsate);
}

function pulsate() {
    $(this).fadeOut();
    $(this).fadeIn();
}
$(function() {
    
});
