console.log('\'Allo \'Allo!');

(function() {
    'use strict';

    //smooth scroll
    $('a[href^="#"]').click(function(event) {
        var id = $(this).attr('href');
        var target = $(id).offset().top;
        $('html, body').animate({
            scrollTop: target
        }, 500);
        event.preventDefault();
    });

})();

$(function() {
    'use strict';
    $('.view-pdf').on('click', function() {
        var pdfLink = $(this).attr('href');
        var iframe = '<div class="iframe-container"><iframe src="' + pdfLink + '"></iframe></div>';
        $.createModal({
            title: 'Resume',
            message: iframe,
            closeButton: true,
            scrollable: false
        });
        return false;
    });
});