<?php

$file = realpath(dirname(__FILE__)."/../config-be/ClsConexion.php");
require_once($file); 

class ClsUsuario extends ClsConexion {

    function Get_Usuario_By_cPerUsuCodigo_cPerUsuClave($pcPerUsuCodigo, $pcPerUsuClave) {
        $this->query = "Select * FROM perusuario WHERE cPerUsuCodigo = '$pcPerUsuCodigo' AND cPerUsuClave = MD5('$pcPerUsuClave') AND nPerUsuEstado = 1";
        $this->execute_query();
        $data = $this->rows;
        return $data;
    }
}
