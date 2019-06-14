<?php
        // Array ที่เป็น routes     path file
$routes['/api/member']['GET'] = './member/get.php'; // เรียกใช้งาน
$routes['/api/member']['POST'] = './member/post.php'; // สร้างตัวเรียก และลงทะเบียน rount
$routes['/api/member']['PUT'] = './member/put.php';
$routes['/api/member']['DELETE'] = './member/delete.php';