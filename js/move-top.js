(function(a) {
    a.fn.UItoTop = function(e) {
        var b = a.extend({
                text: "To Top",
                min: 200,
                inDelay: 600,
                outDelay: 400,
                containerID: "toTop",
                containerHoverID: "toTopHover",
                scrollSpeed: 1200,
                easingType: "linear"
            }, e),
            d = "#" + b.containerID,
            c = "#" + b.containerHoverID;
        a("body").append('<a href="#" id="' + b.containerID + '">' + b.text + "</a>");
        a(d).hide().on("click.UItoTop", function() {
            a("html, body").animate({
                scrollTop: 0
            }, b.scrollSpeed, b.easingType);
            a("#" + b.containerHoverID, this).stop().animate({
                opacity: 0
            }, b.inDelay, b.easingType);
            return !1
        }).prepend('<span id="' +
            b.containerHoverID + '"></span>').hover(function() {
            a(c, this).stop().animate({
                opacity: 1
            }, 600, "linear")
        }, function() {
            a(c, this).stop().animate({
                opacity: 0
            }, 700, "linear")
        });
        a(window).scroll(function() {
            var c = a(window).scrollTop();
            "undefined" === typeof document.body.style.maxHeight && a(d).css({
                position: "absolute",
                top: c + a(window).height() - 50
            });
            c > b.min ? a(d).fadeIn(b.inDelay) : a(d).fadeOut(b.Outdelay)
        })
    }
})(jQuery);