<?php
header('content-type: application/json; charset=utf8'); //เปลี่ยนชนิดของมันซะ 
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: *');
header('Access-Control-Allow-Headers: *');
// echo '<pre>';
// print_r($_SERVER); //ดูว่าเราจะเล่นกับ Server อะไรได้บ้าง
// echo '</pre>';



require './configs/defines.php'; //เรียกใช้ตัวที่ประกาศเอาไว้จากหน้า defines.php 
require './configs/routes.php'; //เรียกใช้ตัวที่ประกาศเอาไว้จากหน้า routes.php 
require './configs/database.php';

// $host       = 'localhost';
// $user       = 'root';
// $password   = '';
// $dbname     = 'carcare';

// $database = mysqli_connect($host,$user,$password,$dbname);

// if(!$database)
// {   
//     http_response_code(500);
//     echo json_encode([
//         'message'   => 'Database connect error.',
//         'error'     => mysqli_connect_error()
//     ]);
//     exit;
// }

if($method === 'OPTIONS') exit; // ต้องประกาศใช้เพื่อเชื่อมกับ Angular
if(isset($routes[$route] [$method])) //เช็คว่า routes นี่มีมั้ย rount , method เป็นอะไร มีการประกาศไว้มั้ย
{
    require $routes[$route] [$method]; // ทำการ include ทำให้เวลาเรามีการสร้างและลงทะเบียนถูกต้อง ก็จะไปดึงไฟล์มาใช้งานตาม path ทันที  
}else
{
    http_response_code(404); //ถ้าไม่มีก็แจ้ง
    echo json_encode(['message' => 'Page not found.']);
}













// switch ($route) {
//     case '/api/member'; //ถ้ามีการเข้า route
//         // http_response_code(200); //แปลว่า server ok ส่วน 400 แปลว่า Not frond

//         if ($method == 'GET') {
//             echo json_encode(['message' => 'GET Member']);
//             break;
//         }
//         elseif ($method == 'POST') {
//             $request = json_decode(file_get_contents('php://input')); // ทำตัวเปลี่ยนค่า เพราะ Angular ไม่รองรับ เพื่อไป get ค่าที่เป็นไฟล์ json
//             echo json_encode([
//                 'message'    => 'POST Member',
//                 'post_data'  => $request->message // เปลี่ยนให้มันเป็น Message เพราะไม่งั้นมันจะส่งแบบ Object 
//             ]);
//             break;
//         }
//         elseif ($method == 'PUT') {
//             $request = json_decode(file_get_contents('php://input'));
//             echo json_encode([
//                 'message'   => 'Update Member', // Backend ส่งไป Frontend
//                 'put_data'  => $request->message, // เปลี่ยนให้มันเป็น Message เพราะไม่งั้นมันจะส่งแบบ Object และ ตัวนี้ เป็นการส่งจาก Frontend มา Backend
//                 'id' => $_GET['id'] // รับค่าไอดีจาก Frontend แบบ Get ได้โดยไม่ต้องประกาศ json_decode(file_get_contents('php://input'))
//             ]);
//             break;
//         }
//         elseif ($method == 'DELETE') {
//             echo json_encode(['message' => 'DELETE Member']);
//             break;
//         }
//         elseif($method == 'OPTIONS') exit;

//     default:
//         http_response_code(404);
//         echo json_encode(['message' => 'Page not found.']);
// }
