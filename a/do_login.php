<?php
//注意，domain的设置
//如果这里不设置domain，默认domain是[a.dev]，浏览器发送的是[.a.dev]的cookie
//会有需要刷新cookie才会生效的情况
setcookie("user_ticket",$_GET['user_ticket'], time()+3600*24 ,"/", ".a.dev");
