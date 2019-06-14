<?php

$routes = []; // ประกาศ Array
$route = $_SERVER['PATH_INFO']; //พาทที่เราทำการเล่นอยู่
$method = $_SERVER['REQUEST_METHOD']; //ส่งแบบ GET