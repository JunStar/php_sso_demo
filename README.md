#PHP单点登录的DEMO

实现的方式是在不同域下共享cookie实现单点登录

程序包里有4个目录，a、b、c和u；将a、b、c三个目录看做三个不同的项目系统；u看做通信证系统

#绑定域名

1.a文件夹绑定域名www.a.com；

2.b文件夹绑定域名www.b.com；

3.c文件夹绑定域名www.c.com；

4.u文件夹绑定域名www.u.com；

#执行登录操作

1.访问www.a.com域名，执行登录操作，用户名和密码只判断了非空即可，随意输入；

2.分别访问www.b.com和www.c.com可以看到已经处于登录状态；

3.分别访问www.b.com/getcookie.php和www.c.com/getcookie.php和www.u.com/getcookie.php都可以看到已经生成cookie，cookie的内容是一个base64_encode( json_encode(['user_name'=>$_POST['user_name'],'user_password'=>$_POST['user_password']]))的字符串；

#注意点
此demo只是一个简单的跨域共享cookie的代码；关于cookie的安全性，你可能需要了解下加解密算法，将cookie信息加密后存入客户端