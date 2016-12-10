(function() {
    window.app = {};  //全局对象
    var main = {};
    main.uApiUrl = "http://u.dev";
    main.ajaxSet = function(){
        // 设置AJAX请求时某些参数的的默认值
        $.ajaxSetup({
            type: "POST",
            dataType: "json",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            //设置AJAX请求时，带上cookie
            xhrFields : {
                withCredentials : true
            }
        });

        // 全局定义AJAX完成后需要做的操作，检测是否登录
        // $(document).ajaxSuccess(function(evt, request, settings) {
        //
        // });
    }

    main.setCookie = function(name, value, expire){
        var d = new Date();
        //默认有效时长为1天
        if(!expire){
            expire = 1;
        }
        d.setTime(d.getTime() + (expire * 24 * 60 * 60 *1000 ));
        var expires = "expires=" + d.toGMTString();
        document.cookie= name + "=" + value + ";" + expires + "; path=/; domain=.a.dev";
    }

    main.ajaxSet();
    window.app.main = main;
})();