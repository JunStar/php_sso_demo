<?php
//设置可以跨域AJAX请求
header("Access-Control-Allow-Origin: ".$_SERVER['HTTP_ORIGIN']);
header("Access-Control-Allow-Credentials: true");

$user_name      =   trim( $_POST['user_name'] );
$user_password  =   trim( $_POST['user_password'] );

if( !$user_name ){
    error('用户名不能为空');
}

if( !$user_password ){
    error('密码不能为空');
}

$user_info      =   ['user_name'=>$_POST['user_name'],'user_password'=>$_POST['user_password']];
$user_ticket    =   base64_encode( json_encode( $user_info ) );
setcookie("user_ticket",$user_ticket, time()+3600*24 ,"/", ".u.dev");
success( '登录成功', base64_encode( json_encode( $user_info ) ) );

function success($info, $data){
    exit( json_encode( ['status'=>true, 'info'=>$info, 'data'=>$data] ) );
}

function error($info){
    exit( json_encode( ['status'=>false, 'info'=>$info] ) );
}