<?php

session_start();
require "../models-be/ClsVenta.php";
$objVenta = new ClsVenta();
$objDatos = json_decode(file_get_contents("php://input"));
$cAccion = $objDatos->accion;

if (isset($_SESSION['cPerCodigo'])) {
    $cPerCodigo = $_SESSION['cPerCodigo'];
}

if ($cAccion == 'ListarVentas') {
    try {
        $Resultado = $objVenta->ListarVentas();

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
}

if ($cAccion == 'RegistrarVenta') {
    try {
        $objVenta->beginTransaction();

        $cliente           = $objDatos->cliente;
        $idmesa                = $objDatos->idmesa;
        $fecha           = $objDatos->fecha;
        $total           = $objDatos->total;
        $detalles           = $objDatos->detalles;
        

        $ResultadoCab = $objVenta->RegistrarCabecera($cliente, $idmesa, $fecha, $total);

        foreach ($detalles as $key => $value) {
            $Resultado = $objVenta->RegistrarDetalle($ResultadoCab[0]["Id"], $value->idProducto, $value->cantidad, $value->precio);
        }

        $objVenta->commit();

        echo json_encode(array(
            'success' => true,
            'data'  => $Resultado,
        ));
    } catch (PDOException $e) {
        $objVenta->rollback();
        echo json_encode(array(
            'success' => false,
            'data'  => $e->getMessage(),
        ));
    } catch (Exception $e) {
        $objVenta->rollback();
        echo json_encode(array(
            'success' => false,
            'data'  => $e->getMessage(),
        ));
    }
}
