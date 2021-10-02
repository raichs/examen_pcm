<?php

session_start();
require "../models-be/ClsUsuario.php";

$objLogin = new ClsUsuario();

$objDatos = json_decode(file_get_contents("php://input"));
$pcPerUsuCodigo = $objDatos->name;
if (isset($objDatos->password)) {
    $pcPerUsuClave = $objDatos->password;
}else{
    $pcPerUsuClave = "";
}

try {
    $Resultado = $objLogin->Get_Usuario_By_cPerUsuCodigo_cPerUsuClave($pcPerUsuCodigo, $pcPerUsuClave);
    if (count($Resultado) > 0) {
        $_SESSION['cPerCodigo'] = $Resultado[0]['cPerCodigo'];
    }
    echo json_encode(array(
        'success' => true,
        'data'  => $Resultado,
    ));
} catch (PDOException $e) {
    echo json_encode(array(
        'success' => false,
        'data'  => $e->getMessage(),
    ));
} catch (Exception $e) {
    echo json_encode(array(
        'success' => false,
        'data'  => $e->getMessage(),
    ));
}