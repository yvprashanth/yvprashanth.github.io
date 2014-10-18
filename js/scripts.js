// JavaScript source code
$(document).ready(function () {

    //Hide stuffs

    $('.contact').hide();

    // Contact expando/collapso

    $('.contact-toggle').click(function () {
        $('.contact').slideToggle(300);
        return false;
    });

    // Contact close

    $('.contact a.contact-close').click(function () {
        $('.contact').slideUp(300);
        return false;
    });

    // Slides

    $('.carousel').carousel({
        interval: 10000,
        pause: false,
        wrap: true
    });

});
