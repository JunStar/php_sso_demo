<?php
setcookie("user_ticket",$_GET['user_ticket'], time()+3600*24 ,"/");
$_COOKIE['user_ticket'] = $_GET['user_ticket'];