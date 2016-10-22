/**
 * Created by my on 2016/10/21.
 */
$(function () {
    var clone = $("#pic .images li").first().clone();
    $("#pic .images").append(clone);
    var i = 0;
    var size = $("#pic .images li").size();
//            点击向左轮播
    $("#pic .btn_l").click(function () {
        i--;
        if (i == -1) {
            $(".pic .images").css({left: -(size - 1) * 1920});
            i = size - 2;
        }
        $("#pic .images").stop().animate({left: -i * 1920}, 1000);
        $("#pic .num li").eq(i).addClass("on").siblings().removeClass("on");
    });
//            点击向右轮播
    $("#pic .btn_r").click(function () {
        moveR();
    });
//            向右轮播函数
    function moveR() {
        i++;
        if (i == size) {
            $("#pic .images").css({left: 0});
            i = 1;
        }
        $("#pic .images").stop().animate({left: -i * 1920}, 1000);
        if (i == size - 1) {
            $("#pic .num li").eq(0).addClass("on").siblings().removeClass("on");
        } else {
            $("#pic .num li").eq(i).addClass("on").siblings().removeClass("on");
        }
    }

//            鼠标滑过圆点
    $("#pic .num li").hover(function () {
        var index = $(this).index();
        i = index;
        $("#pic .images").stop().animate({left: -i * 1920}, 1000);
        $(this).addClass("on").siblings().removeClass("on");
    });
//            定时自动轮播
    var t = setInterval(function () {
        moveR();
    }, 1500);
//            鼠标滑过图片停止自动轮播
    $("#pic").hover(function () {
            clearInterval(t);
        },
        function () {
            t = setInterval(function () {
                moveR();
            }, 1500)
        });
})