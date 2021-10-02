! function(a,
    b) {
    var c = function(a, b, c) {
        var d;
        return function() {
            function h() {
                c || a.apply(f, g), d = null
            }
            var f = this,
                g = arguments;
            d ? clearTimeout(d) : c && a.apply(f,
                    g),
                d = setTimeout(h,
                    b || 100)
        }
    };
    jQuery.fn[b] = function(a) {
        return a ? this.bind("resize", c(a)) : this.trigger(b)
    }
}
(jQuery,
    "smartresize");
var CURRENT_URL = window.location.href.split("#")[0].split("?")[0],
    $BODY = $("body"),
    $MENU_TOGGLE = $("#menu_toggle"),
    $SIDEBAR_MENU = $("#sidebar-menu"),
    $SIDEBAR_FOOTER = $(".sidebar-footer"),
    $LEFT_COL = $(".left_col"),
    $RIGHT_COL = $(".right_col"),
    $NAV_MENU = $(".nav_menu"),
    $FOOTER = $("footer"),
    randNum = function() {
        return Math.floor(21 * Math.random()) + 20
    };
$(document).ready(function() {

    }),
    $(document).ready(function() {
        $('[data-toggle="tooltip"]').tooltip({
            container: "body"
        })
    }),
    $(".progress .progress-bar")[0] && $(".progress .progress-bar").progressbar(),
    $(document).ready(function() {
        if ($(".js-switch")[0]) {
            var a = Array.prototype.slice.call(document.querySelectorAll(".js-switch"));
            a.forEach(function(a) {
                new Switchery(a, {
                    color: "#26B99A"
                })
            })
        }
    }),
    $("table input").on("ifChecked",
        function() {
            checkState = "", $(this).parent().parent().parent().addClass("selected"), countChecked()
        }
    ),
    $("table input").on("ifUnchecked",
        function() {
            checkState = "", $(this).parent().parent().parent().removeClass("selected"), countChecked()
        }
    );
var checkState = "";
$(".bulk_action input").on("ifChecked",
        function() {
            checkState = "", $(this).parent().parent().parent().addClass("selected"), countChecked()
        }
    ),
    $(".bulk_action input").on("ifUnchecked",
        function() {
            checkState = "", $(this).parent().parent().parent().removeClass("selected"), countChecked()
        }
    ),
    $(".bulk_action input#check-all").on("ifChecked",
        function() {
            checkState = "all", countChecked()
        }
    ),
    $(".bulk_action input#check-all").on("ifUnchecked",
        function() {
            checkState = "none", countChecked()
        }
    ),
    $(document).ready(function() {
        $(".expand").on("click", function() {
            $(this).next().slideToggle(200), $expand = $(this).find(">:first-child"), "+" == $expand.text() ? $expand.text("-") : $expand.text("+")
        })
    }),
    "undefined" != typeof NProgress && ($(document).ready(function() {
            NProgress.start()
        }),
        $(window).load(function() {
            NProgress.done()
        }));
var originalLeave = $.fn.popover.Constructor.prototype.leave;
$.fn.popover.Constructor.prototype.leave = function(a) {
        var c, d, b = a instanceof this.constructor ? a : $(a.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
        originalLeave.call(this, a), a.currentTarget && (c = $(a.currentTarget).siblings(".popover"), d = b.timeout, c.one("mouseenter", function() {
            clearTimeout(d), c.one("mouseleave", function() {
                $.fn.popover.Constructor.prototype.leave.call(b, b)
            })
        }))
    },
    $("body").popover({
        selector: "[data-popover]",
        trigger: "click hover",
        delay: {
            show: 50,
            hide: 400
        }
    }),
    $(document).ready(function() {
        //init_flot_chart(),
            init_JQVmap(),
            init_daterangepicker(),
            init_skycons(),
            init_chart_doughnut(),
            init_gauge()
    });