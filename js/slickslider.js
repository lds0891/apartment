$(document).ready(function(){
    //Slick slider room
    $('.slider-room__head').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-room__nav',
        infinite: false,
        useTransform: true,
    });
    $('.slider-room__nav').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.slider-room__head',
        dots: false,
        arrows: false,
        infinite: false,
        focusOnSelect: true,
    });
});
