/**
 * Created by Administrator on 2016/10/23 0023.
 */

var _smallBox = document.getElementsByClassName('smallBox')[0];
var _floatBox = document.getElementsByClassName('floatBox')[0];
var _smallImg = document.getElementsByClassName('smallImg')[0];
var _bigImg = document.getElementsByClassName('bigImg')[0];
var _bigBox = document.getElementsByClassName('bigBox')[0];

_smallBox.onmouseover = function () {
    _floatBox.style.display = 'block';
    _bigBox.style.display = 'block';
};
_smallBox.onmousemove = function (ev) {
    ev = ev || window.event;
    var _left = ev.clientX - _smallBox.offsetLeft - _floatBox.offsetWidth / 2;
    var _top = ev.clientY - _smallBox.offsetTop - _floatBox.offsetHeight / 2;
    if (_left < 0) {
        _left = 0
    } else if (_left > _smallBox.offsetWidth - _floatBox.offsetWidth) {
        _left = _smallBox.offsetWidth - _floatBox.offsetWidth
    }
    if (_top < 0) {
        _top = 0
    } else if (_top > _smallBox.offsetHeight - _floatBox.offsetHeight) {
        _top = _smallBox.offsetHeight - _floatBox.offsetHeight
    }
    _floatBox.style.left = _left + 'px';
    _floatBox.style.top = _top + 'px';

    var percentX = _left / (_smallBox.offsetWidth - _floatBox.offsetWidth);
    var percentY = _top / (_smallBox.offsetHeight - _floatBox.offsetHeight);
    _bigImg.style.left = -percentX * (_bigImg.offsetWidth - _bigBox.offsetWidth) + "px";
    _bigImg.style.top = -percentY * (_bigImg.offsetHeight - _bigBox.offsetHeight) + "px";

};
_smallBox.onmouseout = function () {
    _floatBox.style.display = 'none';
    _bigBox.style.display = 'none'
};

$(function () {
    $('.smallPic1').mouseover(function () {
        $('.smallImg').attr('src', '../images/detail/4001.jpg');
        $('.bigImg').attr('src', '../images/detail/8001.jpg')
    });
    $('.smallPic2').mouseover(function () {
        $('.smallImg').attr('src', '../images/detail/4002.jpg');
        $('.bigImg').attr('src', '../images/detail/8002.jpg')
    });
    $('.smallPic3').mouseover(function () {
        $('.smallImg').attr('src', '../images/detail/4003.jpg');
        $('.bigImg').attr('src', '../images/detail/8003.jpg')
    });
    $('.smallPic4').mouseover(function () {
        $('.smallImg').attr('src', '../images/detail/4004.jpg');
        $('.bigImg').attr('src', '../images/detail/8004.jpg')
    });
});













