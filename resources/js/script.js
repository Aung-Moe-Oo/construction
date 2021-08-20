$(document).ready(function () {
    // sticky nav
    $("#job").waypoint(function(direction){
        if(direction == "down"){
            $('nav').addClass("nav-sticky");
        }else{
            $('nav').removeClass("nav-sticky");
        }
    },{
        offset: '50%'
    })
    // scroll nav button effects
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });



        // mobile nav icon
    $('.js-mobile-icon').click(function () {
        $('.nav-main').slideToggle(200);
        if ($('.js-mobile-icon i').hasClass('fa-times')) {
            $('.js-mobile-icon i').removeClass('fa-times');
            $('.js-mobile-icon i').addClass('fa-bar');

        } else {
            $('.js-mobile-icon i').addClass('fa-times');
            $('.js-mobile-icon i').removeClass('fa-bar');

        }
    })
    //Animation Scroll
    // $('.js-wp-1').waypoint(function (direction) {
    //     $('.js-wp-1').addClass('animated animate__animated animate__fadeInUp')
    // }, {
    //     offset: '60%'
    // })
    // $('.js-wp-2').waypoint(function (direction) {
    //     $('.js-wp-2').addClass('animated animate__animated animate__fadeInUp')
    // }, {
    //     offset: '60%'
    // })
    // $('.js-wp-3').waypoint(function (direction) {
    //     $('.js-wp-3').addClass('animated animate__animated animate__fadeInUp')
    // }, {
    //     offset: '60%'
    // })
})
