/**
 * Created by my on 2016/10/24.
 */
var i = 0;
$(function () {
    $("input[type='submit']").click(function () {

        if ($('.pwd1').val() === $('.pwd2').val()) {
            i++;
            $.cookie('username' + i,$('.username').val());
            $.cookie('password' + i,$(".pwd1").val());
        } else {
            alert('两次密码输入不一致')
        }






    })






});
