<?php
$host       = 'localhost';
$user       = 'root';
$password   = '';
$dbname     = 'php_ang7_db';

$database = mysqli_connect($host,$user,$password,$dbname); //ใช้สำหรับเชื่อมต่อฐานข้อมูล
mysqli_set_charset($database,"utf8"); // charset to utf-8

if(!$database)
{   
    http_response_code(500);
    echo json_encode([
        'message' => 'Database connect error.',
        'error' => mysqli_connect_error()
    ]);
    exit;
}