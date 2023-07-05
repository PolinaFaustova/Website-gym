(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {


 



        $(".hero-content-slider").owlCarousel({
            items: 1,
            nav: true,
            dot: false,
            loop: true,
            margin: 0,
            autoplay: true,
            autoplayTimeout: 6000,
            smartSpeed: 1000,
            responsiveClass: true,
            navText: ["<i class='fal fa-long-arrow-left'></i> Prev", "Next <i class='fal fa-long-arrow-right'></i>"],
            animateIn: 'fadeIn',
            animateOut: 'fadeOut'

        });


    });

}(jQuery));