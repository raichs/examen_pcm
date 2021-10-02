<?php

session_start();
if (isset($_SESSION['cPerCodigo'])) {
    echo $_SESSION['cPerCodigo'];
}else{
	echo -1;
}


