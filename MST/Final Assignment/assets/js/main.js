jQuery(document).ready(function ($) {

    var nav_offset_top = $("header").height() + 120;

    function navbarFixed() {
        if ($(".mt-header").length) {
            $(window).scroll(function () {
                var scroll = $(window).scrollTop(),
                    slowscroll = scroll / 2;
                if (scroll >= nav_offset_top) {
                    $(".mt-header").addClass("header_fixed");

                } else {
                    $(".mt-header").removeClass("header_fixed");
                    //   $('.billboard').css({
                    //  transform: "translateY(0)"
                    //  });
                }
            });
        }
    }

    navbarFixed();
    $(document).on('click', '.ham-menu', function () {
        $('.mt-header__wrapper').toggleClass('active');
        $('.ham-menu').toggleClass('active');
        $('.mt-header__menu ul').slideToggle();
    });







});