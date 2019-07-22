$(document).ready(function () {


//    nav bar
    $('.js-section-1').waypoint(function (direction) {
        if (direction === "down") {
            $('nav').addClass('sticky')
        } else {
            $('nav').removeClass('sticky')
        }
    }, {
        offset: '150px'

    });

    //nav-bar mobile
    $('.js-nav-icon').click(function(){
        var nav = $('.sticky .first-age-nav li');
        var nav = $('.first-age-nav li');
        nav.slideToggle(300);
    
        
          
        if($("#iconNav").attr("name")=="menu"){
            $("#iconNav").attr("name","close");

        }else if($("#iconNav").attr("name")=="close"){
            $("#iconNav").attr("name","menu");
        }
        
    }); 
    

    $('.js-scrol-to-plan').click(function () {

        $('html,body').animate({scrollTop: $('.section-5').offset().top}, 1000);

    });

    /******************Nav Bar Srolling******************************/


//    $('.js-sec-1').click(function(){
//        
//        $('html,body').animate({scrollTop:$('.section-1').offset().top},1000);
//        
//    })
//
//    $('.js-sec-2').click(function(){
//        
//        $('html,body').animate({scrollTop:$('.section-2').offset().top},1000);
//        
//    })
//
//    $('.js-sec-3').click(function(){
//        
//        $('html,body').animate({scrollTop:$('.section-3').offset().top},1000);
//        
//    })
//
//    $('.js-sec-4').click(function(){
//        
//        $('html,body').animate({scrollTop:$('.section-4').offset().top},1000);
//        
//    })
//
//    $('.js-sec-5').click(function(){
//        
//        $('html,body').animate({scrollTop:$('.section-5').offset().top},1000);
//        
//    })


// https://css-tricks.com/snippets/jquery/smooth-scrolling/
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '')
                &&
                location.hostname === this.hostname
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
                        }
                    });
                }
            }
        });

    /*animate row*/

    $('.js-animate-row').waypoint(function (direction) {

        $('.js-animate-row').addClass('animated fadeIn');

    }, {
        offset: '50%'
    });

    $('.js-animate-row-2').waypoint(function (direction) {

        $('.js-animate-row-2').addClass('animated fadeInUp');

    }, {
        offset: '50%'
    });

    $('.js-animate-row-3').waypoint(function (direction) {

        $('.js-animate-row-3').addClass('animated pulse');

    }, {
        offset: '50%'
    });

});