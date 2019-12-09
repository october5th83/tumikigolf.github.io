/**
 * @function      Include
 * @description   Includes an external scripts to the page
 * @param         {string} scriptUrl
 */
function include(scriptUrl) {
    document.write('<script src="/Assets/' + scriptUrl + '"></script>');
}

var _URL_MAIN = 'http://103.56.158.38:8008/';

/**
 * @function      isIE
 * @description   checks if browser is an IE
 * @returns       {number} IE Version
 */
function isIE() {
    var myNav = navigator.userAgent.toLowerCase();
    return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
};


/**
 * @module       Copyright
 * @description  Evaluates the copyright year
 */
;
(function ($) {
    var currentYear = (new Date).getFullYear();
    $(document).ready(function () {
        $("#copyright-year").text((new Date).getFullYear());
    });
})($);


/**
 * @module       IE Fall&Polyfill
 * @description  Adds some loosing functionality to old IE browsers
 */
;
(function ($) {
    if (isIE() && isIE() < 11) {
        include('js/pointer-events.min.js');
        $('html').addClass('lt-ie11');
        $(document).ready(function () {
            PointerEventsPolyfill.initialize({});
        });
    }

    if (isIE() && isIE() < 10) {
        $('html').addClass('lt-ie10');
    }
})($);


/**
 * @module       WOW Animation
 * @description  Enables scroll animation on the page
 */
;
(function ($) {
    var o = $('html');
    if (o.hasClass('desktop') && o.hasClass("wow-animation") && $(".wow").length) {
        include('js/wow.min.js');

        $(document).ready(function () {
            wow = new WOW(
              {
                  animateClass: 'animated',
                  offset: 100
              }
            );
            wow.init();
        });
    }
})($);

/**
 * @module       Smoothscroll
 * @description  Enables smooth scrolling on the page
 */
;
(function ($) {
    if ($("html").hasClass("smoothscroll")) {
        include('js/smoothscroll.min.js');
    }
})($);

/**
 * @module       RD Smoothscroll
 * @description  Enables smooth scrolling on the page for all platforms
 */
;
(function ($) {
    if ($("html").hasClass("smoothscroll-all")) {
        include('js/rd-smoothscroll.min.js');
    }
})($);

/**
 * @module       ToTop
 * @description  Enables ToTop Plugin
 */
;
(function ($) {
    var o = $('html');
    if (o.hasClass('desktop')) {
        include('js/jquery.ui.totop.min.js');

        //$(document).ready(function () {
        //    $().UItoTop({
        //        easingType: 'easeOutQuart',
        //        containerClass: 'ui-to-top fa fa-angle-up'
        //    });
        //});
    }
})($);

/**
 * @module     Owl Carousel
 * @description Enables Owl Carousel Plugin
 */
;
(function ($) {
    var o = $('.owl-carousel');
    if (o.length) {
        include('js/owl.carousel.js');

        var isTouch = "ontouchstart" in window;

        function preventScroll(e) {
            e.preventDefault();
        }

        $(document).ready(function () {
            var owlClip = $('#video .clip-carousel');
            owlClip.owlCarousel({
                margin: 25,
                nav: true,
                loop: true,
                dots: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 2
                    },
                    1000: {
                        items: 4
                    }
                }
            })
        });

        $(document).ready(function () {
            var owlClip = $('#clips .clip-post');
            owlClip.owlCarousel({
                margin: 25,
                nav: false,
                loop: true,
                dots: false,
                autoplay: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    1000: {
                        items: 2
                    }
                }
            })
        });
    }
})($);


/**
 * @module     Slick slider
 * @description Enables Slick slider Plugin
 */
;
(function ($) {
    var o = $('.slick');
    if (o.length) {
        include('slick/slick.js');

        $(document).ready(function () {
            var regular = $('.slider-regular');
            regular.slick({
                dots: false,
                fade: false,
                infinite: true,
                arrows: false,
                autoplay: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                asNavFor: '.slider-nav',
                focusOnSelect: true
                //slidesToShow: 1,
                //slidesToScroll: 1,
                //arrows: false,
                //fade: true,
                //asNavFor: '.slider-nav'

            });

            $('.slider-nav').slick({
                dots: true,
                vertical: true,
                slidesToShow: 3,
                slidesToScroll: 3,
                asNavFor: '.slider-regular',
                focusOnSelect: true
            });
        });
    }
})($);
/**
 * @module       Bxslider 
 * @description  Enables Bxslider Plugin
 */
;
(function ($) {
    var o = $('.bxslider');
    if (o.length) {
        include('js/flugin/jquery.bxslider.js');

        function preventScroll(e) {
            e.preventDefault();
        }
        $(document).ready(function () {
            o.each(function () {
                var c = $(this);
                c.bxSlider({
                    captions: true,
                    preloadImages: 'all'
                });
            });
        });
    }
})($);

/**
 * @module       SVG-Animate
 * @description  Enables SVG-Animate *
 */

;
(function ($) {
    var o = $('#svg-phone_1'),
        msie = !!navigator.userAgent.match(/Trident\/7\./);
    //(!document.all) - is IE11-
    if ((o.length) && (!msie)) {

        $(document).ready(function () {
            $(this).on("scroll", $.proxy(function () {
                o.not('.active').each(function () {
                    var $this = $(this);
                    var position = $this.offset().top;

                    if (($(window).scrollTop() + $(window).height()) > position) {
                        $this.attr("class", "active");
                        $this.parent().find('.phone_1').addClass('active');
                    }
                });
            }, $(this)))
                .trigger("scroll");
        });
    }
})($);


/**
 * @module       ViewPort Universal
 * @description  Add class in viewport
 */
;
(function ($) {
    var o = $('.view-animate');
    if (o.length) {

        $(document).ready(function () {
            $(this).on("scroll", $.proxy(function () {
                o.not('.active').each(function () {
                    var $this = $(this);
                    var position = $this.offset().top;

                    if (($(window).scrollTop() + $(window).height()) > position) {
                        $this.addClass("active");
                    }
                });
            }, $(this)))
                .trigger("scroll");
        });
    }
})($);


/**
 * @module       Scroll To
 * @description  Enables Scroll To
 */
;
(function ($) {
    var o = $('.faq-section');
    if (o.length) {
        include('js/scrollTo.js');
        $(document).ready(function () {
            o.scrollTo({});
        });
    }
})($);


/**
 * @module       Magnific Popup
 * @description  Enables Magnific Popup Plugin
 */
;
(function ($) {
    var o = $('[data-lightbox]').not('[data-lightbox="gallery"] [data-lightbox]'),
        g = $('[data-lightbox^="gallery"]');
    if (o.length > 0 || g.length > 0) {
        include('js/jquery.magnific-popup.min.js');

        $(document).ready(function () {
            if (o.length) {
                o.each(function () {
                    var $this = $(this);
                    $this.magnificPopup({
                        type: $this.attr("data-lightbox")
                    });
                })
            }

            if (g.length) {
                g.each(function () {
                    var $gallery = $(this);
                    $gallery
                        .find('[data-lightbox]').each(function () {
                            var $item = $(this);
                            $item.addClass("mfp-" + $item.attr("data-lightbox"));
                        })
                        .end()
                        .magnificPopup({
                            delegate: '[data-lightbox]',
                            type: "image",
                            // Delay in milliseconds before popup is removed
                            removalDelay: 300,
                            // Class that is added to popup wrapper and background
                            // make it unique to apply your CSS animations just to this exact popup
                            mainClass: 'mfp-fade',
                            gallery: {
                                enabled: true
                            }
                        });
                })
            }
        });
    }
})(jQuery);

/**
 * @module       FB
 * @description  FB comments
 */
;
(function ($) {
    var o = $('#fb-root');
    if (o.length) {
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s);
            js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }
})(jQuery);

/**
 * @module       flexslider
 * @description  Enables RD Parallax 3.5.0 Plugin
 */
;
(function ($) {
    var o = $('#flexGallery');
    if (o.length) {
        include('js/jquery.flexslider.js');
        $(document).ready(function () {
            $('#carousel').flexslider({
                animation: "slide",
                controlNav: false,
                animationLoop: false,
                slideshow: false,
                itemWidth: 102,
                itemMargin: 5,
                asNavFor: '#slider'
            });

            $('#slider').flexslider({
                animation: "slide",
                controlNav: false,
                animationLoop: false,
                slideshow: false,
                sync: "#carousel",
                start: function (slider) {
                    $('body').removeClass('loading');
                }
            });
        });
    }
})(jQuery);
/**
 * @module       Apply page
 * @description  Global 
 */

(function ($) {
    $(document).ready(function () {

        //tab product
        $('#tab-anchor li.nav-item:first a.nav-link').addClass('active');
        $('#tab-content .tab-pane:first').addClass('active show');

        $('#tab-anchor li.nav-item a.nav-link').on('click', function () {
            $('#tab-anchor li.nav-item a.nav-link').removeClass('active');
            $(this).addClass('active');

            var element = $(this).attr("href");
            $('#tab-content .tab-pane').removeClass('active show');
            $('#tab-content').find(element).addClass('active show');
        });

        /*   Navigation Background Color  */
        $(window).on("scroll", function () {
            if ($(this).scrollTop() > 100) {
                $(".navbar-fixed-top").addClass("nav-fixed-bg");
            } else {
                $(".navbar-fixed-top").removeClass("nav-fixed-bg");
            }
        });

        //// scrollTo Element
        //$('a[href^="#"]').on('click', function (event) {

        //    var target = $($(this).attr('href'));
        //    if (target.length) {
        //        event.preventDefault();
        //        $('html, body').animate({
        //            scrollTop: target.offset().top
        //        }, 800);
        //    }

        //});

        //  Fix vertical when not overflow call fullscreenFix() if .fullscreen content changes 
        $(window).resize(fullscreenFix);
        fullscreenFix();

        //Slider main
        $('.product-scroller').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 6000,
            arrows: true,
            dots: false,
            pauseOnHover: true,
            responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            }, {
                breakpoint: 520,
                settings: {
                    slidesToShow: 2
                }
            }]
        });

        $('.feature-scroller').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 6000,
            arrows: false,
            dots: true,
            pauseOnHover: true,
            responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }, {
                breakpoint: 520,
                settings: {
                    slidesToShow: 1
                }
            }]
        });

        //Slider product-image
        $('.product-image').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 6000,
            arrows: false,
            dots: true,
            pauseOnHover: true,
            responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }, {
                breakpoint: 520,
                settings: {
                    slidesToShow: 1
                }
            }]
        });


    });
})(jQuery);

function videoSize() {
    var $windowHeight = $(window).height();
    var $videoHeight = $(".video").outerHeight();
    var $scale = $windowHeight / $videoHeight;

    if ($videoHeight <= $windowHeight) {
        $(".video").css({
            "-webkit-transform": "scale(" + $scale + ") translateY(-50%)",
            "transform": "scale(" + $scale + ") translateY(-50%)"
        });
    };
}

$(window).on('load resize', function () {
    videoSize();
});

function fullscreenFix() {
    var h = $('body').height();
    // set .fullscreen height
    $(".fullset_view").each(function (i) {
        if ($(this).innerHeight() > h) {
            $(this).closest(".fullscreen").addClass("overflow");
        }
    });
}

