import { useEffect } from "react";
import $ from 'jquery';


// Custom hook for sticky menu functionality
function useStickyMenu() {
    useEffect(() => {
        // Function for clone an element for sticky menu
        function cloneNavForSticyMenu($ele, $newElmClass) {
            $ele.addClass('original').clone().insertAfter($ele).addClass($newElmClass).removeClass('original');
        }

        // clone home style 1 navigation for sticky menu
        if ($('.site-header .navigation').length) {
            cloneNavForSticyMenu($('.site-header .navigation'), "sticky-header");
        }

        // Function for sticky menu
        function stickIt($stickyClass, $toggleClass) { 

            if ($(window).scrollTop() >= 300) {
                var orgElement = $(".original");
                var coordsOrgElement = orgElement.offset();
                var leftOrgElement = coordsOrgElement.left;  
                var widthOrgElement = orgElement.css("width");

                $stickyClass.addClass($toggleClass);

                $stickyClass.css({
                    "width": widthOrgElement
                }).show();

                $(".original").css({
                    "visibility": "hidden"
                });

            } else {

                $(".original").css({
                    "visibility": "visible"
                });

                $stickyClass.removeClass($toggleClass);
            }
        }

        // Cleanup function (if necessary)
      return () => {
            // Perform cleanup if needed
        };
    }, []); // Empty dependency array to run only once on component mount
}

export default useStickyMenu;