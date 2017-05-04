$(function () {

    var $commonHeader = $(".mobile-top-menu, .content-header");
    var $contentSection = $(".content-wrapper");

    var lastScroll = 0;
    $(document).scroll(function () {
        var scrollTopPotision = $(this).scrollTop();
        if (scrollTopPotision > lastScroll) {
            toggleHeader(true);
        } else {
            toggleHeader(false);
        }
        lastScroll = scrollTopPotision;
    });

    function toggleHeader(isSlideIn) {
        if (isSlideIn) {
            $commonHeader.addClass("slide-in");
            $commonHeader.removeClass("slide-out");
        } else {
            $commonHeader.addClass("slide-out");
            $commonHeader.removeClass("slide-in");
        }
    }
});