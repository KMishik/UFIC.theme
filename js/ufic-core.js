!function ($) {
    $(document).ready(function () {
        (function () {
            $(".open-form").click(function () {
                $(".open-form").hide();
                $(".close-form").css("display", "block");
                $(".search-block-form").show();
                $(".search-block-form input").focus();
                return false;
            });
            $(".close-form").click(function () {
                $(".close-form").hide();
                $(".open-form").css("display", "block");
                $(".search-block-form").hide();
                return false;
            });
        })();
        //-- Sticky Header
        (function () {
            var header = $('.layout-container > header');
            var fixedElm = $('#ufic-header');
            if (header.length) {
                var elmHeight_1 = $('#ufic-header-top').outerHeight(true);
                $(window).scroll(function () {
                    var scrollTop = $(window).scrollTop();
                    if (scrollTop >= elmHeight_1) {
                        if (!fixedElm.hasClass('sticky')) {
                            fixedElm.addClass('sticky');
                            header.addClass('stub');
                        }
                    }
                    else {
                        fixedElm.removeClass('sticky');
                        header.removeClass('stub');
                    }
                });
            }
        })();
    });
}(jQuery);
