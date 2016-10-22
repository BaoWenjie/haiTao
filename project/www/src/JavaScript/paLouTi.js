/**
 * Created by Administrator on 2016/10/22 0022.
 */
$(function() {
    var AllHet = $(window).height();
    var mainHet = $('.floatCtro').height();
    var fixedTop = (AllHet - mainHet) / 2;
    //  $('div.floatCtro').css({top:fixedTop+'px'});
    $('div.floatCtro p').click(function() {
        var ind = $('div.floatCtro p').index(this) + 1;
        var topVal = $('.index0' + ind).offset().top;
        $('body,html').animate({scrollTop: topVal}, 500)
    });
    $('div.floatCtro a').click(function() {
        $('body,html').animate({scrollTop: 0}, 500)
    });
    $(window).scroll(scrolls);
    scrolls();
    function scrolls() {
        var f1, f2, f3, f4, f5, f6, f7, bck;
        var fixRight = $('div.floatCtro p');
        var blackTop = $('div.floatCtro a');
        var sTop = $(window).scrollTop();
        console.log($('#adTop'));
        f1 = $('.index01').offset().top;
        f2 = $('.index02').offset().top;
        f3 = $('.index03').offset().top;
        f4 = $('.index04').offset().top;
        f5 = $('.index05').offset().top;
        f6 = $('.index06').offset().top;
        f7 = $('.index07').offset().top;
        if (sTop > 200) {
            $('.floatCtro').show()
        } else {
            $('.floatCtro').hide()
        }

        if (sTop <= f2 - 100) {
            blackTop.fadeOut(300).css('display', 'none')
        }
        else {
            blackTop.fadeIn(300).css('display', 'block')
        }

        if (sTop >= f1) {
            fixRight.eq(0).addClass('cur').siblings().removeClass('cur');
        }
        if (sTop >= f2 - 100) {
            fixRight.eq(1).addClass('cur').siblings().removeClass('cur');
        }
        if (sTop >= f3 - 100) {
            fixRight.eq(2).addClass('cur').siblings().removeClass('cur');
        }
        if (sTop >= f4 - 100) {
            fixRight.eq(3).addClass('cur').siblings().removeClass('cur');
        }
        if (sTop >= f5 - 100) {
            fixRight.eq(4).addClass('cur').siblings().removeClass('cur');
        }
        if (sTop >= f6 - 100) {
            fixRight.eq(5).addClass('cur').siblings().removeClass('cur');
        }
        if (sTop >= f7 - 100) {
            fixRight.eq(6).addClass('cur').siblings().removeClass('cur');
        }
    }
});