<script src="js/jquery.js"></script>
<script src="js/main.js"></script>
<script src="js/user.js"></script>
<?php
echo "host by valet:a.dev<br />";
$user_ticket = isset( $_COOKIE['user_ticket'] ) ? $_COOKIE['user_ticket'] : "";
if( $user_ticket ){
    echo '处于登录状态，点击<a href="javascript:void(0);" onclick="app.user.logout()">退出</a>';
}else{
    echo '处于非登录状态，点击<a href="/login.html">登录</a>';
}