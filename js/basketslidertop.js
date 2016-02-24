$(function() {
            var offset = $("#basket").offset();
            var topPadding = 15;
            $(window).scroll(function() {
                if ($(window).scrollTop() > offset.top) {
                    $("#basket").stop().animate({
                        marginTop: $(window).scrollTop() - offset.top + topPadding
                    });
                } else {
                    $("#basket").stop().animate({
                        marginTop: 0
                    });
                };
            });
        });
