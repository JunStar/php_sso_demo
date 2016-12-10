(function() {
    var user = {};

    user.bindEvent = function(){
        //登录按钮绑定点击事件
        $("#login_submit").click(
            function(){
                user.doLogin( $("#user_name").val(), $("#user_password").val() );
            }
        );
    }

    //登录
    user.doLogin = function(user_name, user_password){
        $.ajax({
            url     :   app.main.uApiUrl + "/do_login.php",
            data    :   {"user_name":user_name,"user_password":user_password},
            success :   function(res){
                console.log(res);
                if( res.status ) {
                    //这里开始跨域设置登录的cookie，除了当前域还包括需要登录的其他子系统的域，具体的就是b.dev域和c.dev域也需要设置
                    //设置的方法如下
                    app.main.setCookie("user_ticket",res.data);
                    // new Image().src = "http://a.dev/do_login.php?user_ticket="+res.data;
                    new Image().src = "http://b.dev/do_login.php?user_ticket="+res.data;
                    new Image().src = "http://c.dev/do_login.php?user_ticket="+res.data;
                    // u.dev通信证域的cookie已经在ajax请求时设置上了，此处就不需要设置了
                    // new Image().src = "http://u.dev/do_login.php?user_ticket="+res.data;
                    // setTimeout( "location.href   =   '/index.php'", 3000 );
                    location.href   =   "/index.php";
                    /**
                     * 这里要记录一下，对于本域的Cookie，需要使用js来生成，有两点理由
                     * 1.减少一次php程序的请求；
                     * 2.如果使用new Image().src的方法，请求服务器的php脚本来设置cookie，浏览器直接使用location.href的方式，有可能在首次进入index.php时，cookie并不会生效，需要再次请求一次页面才能看到cookie，本地测试效果尤其明显
                     * 出现这个的原因是加载图片是一个异步请求，location.href刷新请求得到响应先于new Image().src的请求得到的响应
                     */
                }
            },
            error   :   function(res){
                console.log(res);
            }
        });
    }

    //退出登录
    user.logout = function(){
        // new Image().src = "http://a.dev/logout.php";
        new Image().src = "http://b.dev/logout.php";
        new Image().src = "http://c.dev/logout.php";
        new Image().src = "http://u.dev/logout.php";
        app.main.setCookie( "user_ticket", "", -1 );
        location.reload();
        /**
         * 此处删除本域cookie，需要使用js进行删除。理由和登录时生成cookie一样
         */
    }

    user.bindEvent();
    window.app.user = user;
})();