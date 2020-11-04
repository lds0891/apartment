$(document).ready(function(){
    let $photogallery = $('.gallery-wrap__item');
    $photogallery.imagesLoaded( function() {
        $photogallery.masonry({
            itemSelector: '.gallery-wrap__item-link',
            gutter: 20,
            fitWidth: true
        });
    });
});