<?php 
$name = $_POST['name'];


$response = array('menssaje'=>'Te veremos pronto '.$name);

echo json_encode($response)
?>