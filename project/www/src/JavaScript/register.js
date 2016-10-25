/**
 * Created by my on 2016/10/24.
 */

$(function () {
    var boo = false
  //验证邮箱格式


    function email() {
        var reg = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;
        if (!reg.test($('.username').val())) {
            alert('邮箱有误，请重写');
            boo = false
        } else {
            boo = true
        }
    }

    //验证密码格式



    function pwd1() {
        var reg = /\s/;
        if (reg.test($('.pwd1').val())) {
            alert('密码不能有空格！')
            boo = false
        } else if ($(".pwd1").val().length > 16) {
            alert('密码不能大于16位')
            boo = false
        } else if ($(".pwd1").val().length < 6) {
            alert('密码不能小于6位')
            boo = false
        } else {
            boo = true
        }
    }


    //确认密码


    function pwd2() {
        if ($('.pwd1').val() !== $('.pwd2').val()) {
            alert('两次输入密码不一致！');
            boo = false
        } else {
            boo = true
        }
    }



    //验证码


    var msg = msg ? msg : []

    $("input[type='submit']").click(function () {
        email();
        pwd1();
        pwd2();

        if(boo) {



            var obj = {
                'username': $('.username').val(),
                'password': $('.pwd1').val()
            }

            msg.push(obj)
            $.cookie('msg',JSON.stringify(msg),{expires: 10, path:"/"})





        }


    })
})
