<?php

if (isset($_GET['id'])) 
{
    $query  = 'DELETE FROM members WHERE mem_id=?';
    $stmt   = mysqli_prepare($database, $query);
    mysqli_stmt_bind_param($stmt, 'i', $_GET['id']);
    mysqli_stmt_execute($stmt);
    $error_message  =   mysqli_error($database);

    // ตรวจสอบว่า Delete Error หรือไม่
    if ($error_message) 
    {
        http_response_code(400); // error
        exit(json_encode(['message' => $error_message]));
    }

    echo json_encode(['message' => 'Successful.']);
} else {
    http_response_code(400);
    echo json_encode(['message' => 'The request is invalid']);
}
