//declare const jQuery: any;

! function($) {

	'use strict';
	
	$(document).ready(function() {

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
    (function() {
      let header = $('.layout-container > header');
      let fixedElm = $('#ufic-header')
      if(header.length) {
        let elmHeight = $('#ufic-header-top').outerHeight(true);
        $(window).scroll(function () {
                  let scrollTop = $(window).scrollTop();
                  if (scrollTop >= elmHeight) {
											if (!fixedElm.hasClass('sticky')) {
													fixedElm.addClass('sticky');
													header.addClass('stub');
											}
									}
									else
                  {
                    fixedElm.removeClass('sticky');
                    header.removeClass('stub');
                  }
				});
      }
    })();

	});
}(jQuery);
