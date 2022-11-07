<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST");

if(isset($_POST) && !empty($_POST)){
    $data = json_decode(file_get_contents("php://input"), true);
    $username = $data['name'];

};
 ?>


