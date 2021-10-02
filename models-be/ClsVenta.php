<?php

$file = realpath(dirname(__FILE__) . "/../config-be/ClsConexion.php");
require_once($file);

class ClsVenta extends ClsConexion {

    function ListarVentas() {
        $this->query = "call USP_Listar_Ventas();";
        $this->execute_query();
        $data = $this->rows;
        return $data;
    }

    function RegistrarCabecera($cliente, $idmesa, $fecha, $total)
    {
        $this->query = "call USP_Registrar_Venta('$cliente', '$idmesa', '$fecha', '$total');";
        // $this->execute_single_query();
        // return 'Se Registró Correctamente';
        $this->execute_query();
        $data = $this->rows;
        return $data;
    }

    function RegistrarDetalle($idventa, $idproducto, $cantidad, $precio)
    {
        $this->query = "call USP_Registrar_Detalle('$idventa', '$idproducto', '$cantidad', '$precio');";
        $this->execute_single_query();
        return 'Se Registró Correctamente';
    }
}
