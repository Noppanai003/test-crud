<?php

    $sql ='SELECT * FROM members';
    $query = mysqli_query($database,$sql);
    
    $result = mysqli_fetch_all($query, MYSQLI_ASSOC); // ไป Get ข้อมูลมาทั้งหมด และใส่ MYSQLI_ASSOC เพื่อแปลงคีย์ value
    
    echo json_encode($result);