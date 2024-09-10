jQuery(document).ready(function ($) {
    $('.card_slider').slick({
        settings: 'unslick',
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        dots: false,
        infinite: false,
        prevArrow: $('.icon_left'),
        nextArrow: $('.icon_right'),
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                },
            },
        ],
    });

    $('.counter').counterUp({
        delay: 10,
        time: 1000,
    });

    new WOW().init();
});
