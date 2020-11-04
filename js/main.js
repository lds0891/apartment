$(document).ready(function(){
    //Menu
    /* Hamburger menu animation */
    $('.header-wrap__toogler').click(function(){
        $(this).toggleClass('open');
    });
    /* Menu fade/in out on mobile */
    $(".header-wrap__toogler").click(function(e){
        e.preventDefault();
        $(".header-menu").toggleClass('open');
        $("body").toggleClass('lock')
    });
    //
    $('.header-menu__wrap li.active-menu').removeClass('active-menu');
    $('.header-menu__wrap a').each(function () {
        let location = window.location.href;
        let link = this.href;
        if(location === link) {
            $(this).addClass('active-menu');
            $(this).parents('.header-menu__wrap > li').addClass('active-menu');
        }
    });
    //
    if ($("#all-select").length){
        //Select menu function placeholder
        $.widget( 'app.selectmenu', $.ui.selectmenu, {
            _drawButton: function () {
                this._super();
                let selected = this.element
                        .find( '[selected]' )
                        .length,
                    placeholder = this.options.placeholder;

                if (!selected && placeholder) {
                    this.buttonItem.text(placeholder);
                }
            }
        });
        //Select menu function
        $( "#yourRoom" ).selectmenu({
            placeholder: 'Choose your room'
        });
        $( "#yourProperty" ).selectmenu({
            placeholder: 'Choose Propery'
        });
        $( "select" ).selectmenu();
        //Datepicker function, custom class function
        $(function () {
            $("#datepicker").datepicker({
                dateFormat: 'dd.mm.yy',
                beforeShow: function(input, inst) {
                    inst.dpDiv
                        .removeClass('datepicker-home datepicker-property datepicker-room')
                        .addClass($(input).data('dp-class'));
                }
            });
        }());
    }
    else {}
    if ($("#apartment-photo").length){
        //Masonry
        let $photogallery = $('.gallery-wrap__item');
        $photogallery.masonry({
            gutter: 20,
            fitWidth: true
        });
        //LightGallery
        $("#photo-gallery").lightGallery({
            thumbnail: true,
        });
    }
    else {}
    if ($("#apartment-room").length){
        $("#room-gallery").lightGallery({
            thumbnail: true,
        });
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
    }
    else {}
});
